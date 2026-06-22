// Firebase config for cross-device progress sync.
// Fill in the values below from your Firebase project (see SETUP.md),
// then this file just needs to be committed and pushed — no code changes needed.
//
// If FIREBASE_CONFIG.apiKey is left as "REPLACE_ME", the site silently
// falls back to localStorage-only (same-device) progress, so nothing breaks
// while you're setting this up.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAFTv3EPXLleBzFudpAxywJUyRTsgEzVIU",
  authDomain: "valerie-summer-review.firebaseapp.com",
  projectId: "valerie-summer-review",
  storageBucket: "valerie-summer-review.firebasestorage.app",
  messagingSenderId: "152919350685",
  appId: "1:152919350685:web:406b7d2e80a8e5bddfe374",
};

// A hard-to-guess document path so random visitors who somehow find your
// public apiKey can't stumble onto this family's data by guessing a name.
const FIREBASE_FAMILY_DOC = "valerie-9f3a7c2e";
