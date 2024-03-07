// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCpo6IHM6yyheKiXKUneesM6t650DXC2WU",
  authDomain: "fxt-terminators.firebaseapp.com",
  projectId: "fxt-terminators",
  storageBucket: "fxt-terminators.appspot.com",
  messagingSenderId: "800833954882",
  appId: "1:800833954882:web:43190b8e4966cda330f9db",
  measurementId: "G-06BCWMZPYC"
};
  

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);



auth.useDeviceLanguage()

export { firebaseApp, analytics };
