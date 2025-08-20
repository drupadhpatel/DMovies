
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCsDYtpyH43WxaALDGfMYjcjp3KCRyf_wc",
  authDomain: "dmovies-adf8e.firebaseapp.com",
  projectId: "dmovies-adf8e",
  storageBucket: "dmovies-adf8e.firebasestorage.app",
  messagingSenderId: "653984719236",
  appId: "1:653984719236:web:d3a41de2e32caa75ea3dd1",
  measurementId: "G-MD62Y4HQS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app)
const db=getFirestore(app)

const signup=async(name,email,pass)=>{
    try{
      const res = await createUserWithEmailAndPassword(auth, email, pass);

      const user=res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
      })
    }catch(error){
        console.log(error)
        alert(error)
    }

}
const login=async(email,pass)=>{
    try{
        await signInWithEmailAndPassword(auth,email,pass)

    }catch(error){
        console.log(error);
        alert(error);
    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout}