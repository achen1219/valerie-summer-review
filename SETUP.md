# Cross-device sync setup (Firebase)

The site works fine without this — it just saves progress to the browser only
(laptop and iPad would have separate progress). Doing this once makes
progress sync automatically between devices.

## 1. Create a free Firebase project

1. Go to https://console.firebase.google.com and sign in with a Google account.
2. Click **Add project** → name it anything (e.g. `valerie-review`) → you can
   skip Google Analytics → **Create project**.

## 2. Create a Firestore database

1. In the left sidebar, click **Build → Firestore Database**.
2. Click **Create database**.
3. Choose any region close to you → **Start in production mode** → **Enable**.
4. Go to the **Rules** tab and replace the contents with:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /families/{familyId} {
         allow read, write: if true;
       }
     }
   }
   ```
   This allows read/write only to people who know the exact document path
   (a random ID baked into the site's code) — fine for a private family
   study tracker with no sensitive data, since the data is just quiz scores
   and flashcard checkmarks.
5. Click **Publish**.

## 3. Register a web app

1. In the project settings (gear icon, top left) → **Project settings**.
2. Scroll to **Your apps** → click the **</>** (web) icon.
3. Give it any nickname (e.g. `valerie-site`) → **Register app**.
4. You'll see a code block with a `firebaseConfig` object like:

   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "valerie-review.firebaseapp.com",
     projectId: "valerie-review",
     storageBucket: "valerie-review.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef123456"
   };
   ```

## 4. Paste the config into the site

Open `shared/firebase-config.js` in this repo and replace the `REPLACE_ME`
placeholders with the values from step 3 — keep the same key names
(`apiKey`, `authDomain`, etc.). Commit and push. That's it — both `math/`
and `chinese/` pick it up automatically (no other code changes needed),
and the sidebar footer will show "✓ Progress synced across devices" /
"✓ 進度已跨裝置同步" once it's working.

You can paste me the config values instead and I'll fill it in and push
for you.
