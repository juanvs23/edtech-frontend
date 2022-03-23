import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyTNnEHh_UsIhTz4PALRgXZtUNv-KSdIA",
  authDomain: "to-do-system-85152.firebaseapp.com",
  projectId: "to-do-system-85152",
  storageBucket: "to-do-system-85152.appspot.com",
  messagingSenderId: "913021163684",
  appId: "1:913021163684:web:7d8a30596773fecd8eae31",
  measurementId: "G-WY8BJ2FXGZ",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Check that `window` is in scope for the analytics module!
  if (typeof window !== "undefined") {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ("measurementId" in firebaseConfig) {
      firebase.analytics();
      firebase.performance();
    }
  }
}

export default firebase;
