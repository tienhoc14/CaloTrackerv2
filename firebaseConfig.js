import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { LogBox } from "react-native";

const firebaseConfig = {
    apiKey: "AIzaSyDdNV1yhj6XG480axezr_rzpiu4rW2KJ7o",
    authDomain: "calories-tracker-4952e.firebaseapp.com",
    projectId: "calories-tracker-4952e",
    storageBucket: "calories-tracker-4952e.appspot.com",
    messagingSenderId: "504147297868",
    appId: "1:504147297868:web:ec2dda641c47d0fb5d56e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release']);
