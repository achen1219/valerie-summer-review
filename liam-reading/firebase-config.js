// Firebase config for Liam's progress sync.
// Same Firebase project as the rest of the site, but a separate family
// document so his progress never mixes with anyone else's data.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAFTv3EPXLleBzFudpAxywJUyRTsgEzVIU",
  authDomain: "valerie-summer-review.firebaseapp.com",
  projectId: "valerie-summer-review",
  storageBucket: "valerie-summer-review.firebasestorage.app",
  messagingSenderId: "152919350685",
  appId: "1:152919350685:web:406b7d2e80a8e5bddfe374",
};

// A hard-to-guess document path so random visitors who somehow find the
// public apiKey can't stumble onto this family's data by guessing a name.
const FIREBASE_FAMILY_DOC = "liam-acd1e065";
