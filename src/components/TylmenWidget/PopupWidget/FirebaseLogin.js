import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyByrI0gdjPFQN6kO-8ynpn7cG72W18p_EU",

    authDomain: "tylmen-app.firebaseapp.com",

    databaseURL: "https://tylmen-app-default-rtdb.firebaseio.com",

    projectId: "tylmen-app",

    storageBucket: "tylmen-app.appspot.com",

    messagingSenderId: "544635073619",

    appId: "1:544635073619:web:df05145616b5cb42a982a6",

    measurementId: "G-Y25E24P465"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//////// SIGN IN WITH GOOGLE PROVIDER ////////////////////////////////

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid))
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

////// LOGIN WITH USERNAME AND PASSWORD //////////////////////////
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//////// REGISTER WITH USERNAME AND PASSWORD //////////////////

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

//////// SEND PASSWORD RESET EMAIL ///////////////////
const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

////////// SIGN OUT /////////////////////////
const logout = () => {
    signOut(auth);
};

///////// EXPORT FUNCTIONS ////////////////

export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
