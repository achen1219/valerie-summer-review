// Tiny cross-device progress sync, built on Firebase Firestore.
// Falls back to localStorage-only if firebase-config.js has no real config yet.
const CloudSync = (function () {
  let enabled = false;
  let db = null;

  function isConfigured() {
    return typeof FIREBASE_CONFIG !== "undefined" && FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "REPLACE_ME";
  }

  function init() {
    if (!isConfigured()) {
      console.info("[CloudSync] no Firebase config yet — using localStorage only.");
      return;
    }
    if (typeof firebase === "undefined") {
      console.warn("[CloudSync] Firebase SDK script not loaded — using localStorage only.");
      return;
    }
    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.firestore();
      enabled = true;
    } catch (e) {
      console.warn("[CloudSync] init failed, falling back to localStorage only.", e);
    }
  }

  function docRef() {
    return db.collection("families").doc(FIREBASE_FAMILY_DOC);
  }

  // Returns {data, updatedAt} or null
  async function pull(key) {
    if (!enabled) return null;
    const snap = await docRef().get();
    if (!snap.exists) return null;
    const field = snap.data()[key];
    if (!field) return null;
    return { data: field.data, updatedAt: field.updatedAt || 0 };
  }

  let pushTimers = {};
  function push(key, value, ts) {
    if (!enabled) return;
    clearTimeout(pushTimers[key]);
    pushTimers[key] = setTimeout(() => {
      const payload = {};
      payload[key] = { data: value, updatedAt: ts };
      // mergeFields (not a bare merge:true) replaces this top-level field
      // entirely instead of deep-merging into it — otherwise Firestore's
      // recursive merge means deleted nested keys (e.g. a reset flashcard
      // set) never actually disappear from the cloud copy.
      docRef().set(payload, { mergeFields: [key] }).catch(e => console.warn("[CloudSync] push failed", e));
    }, 800); // debounce rapid writes (e.g. checking many flashcards quickly)
  }

  return {
    init,
    get enabled() { return enabled; },
    pull,
    push,
  };
})();
CloudSync.init();

// ---- Drop-in replacements for the load/save pattern used on both pages ----
async function initSyncedProgress(storeKey) {
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(storeKey)) || {}; } catch (e) { progress = {}; }
  if (CloudSync.enabled) {
    try {
      const cloud = await CloudSync.pull(storeKey);
      const localTs = Number(localStorage.getItem(storeKey + "__ts") || 0);
      if (cloud && cloud.updatedAt > localTs) {
        progress = cloud.data || {};
        localStorage.setItem(storeKey, JSON.stringify(progress));
        localStorage.setItem(storeKey + "__ts", String(cloud.updatedAt));
      }
    } catch (e) {
      console.warn("[CloudSync] pull failed, using local copy.", e);
    }
  }
  return progress;
}

function saveSyncedProgress(storeKey, progress) {
  const ts = Date.now();
  localStorage.setItem(storeKey, JSON.stringify(progress));
  localStorage.setItem(storeKey + "__ts", String(ts));
  CloudSync.push(storeKey, progress, ts);
}
