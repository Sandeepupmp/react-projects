import {signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../FirebaseConfig"

export const LoginAPI = (email, password)=>{
    try {
        signInWithEmailAndPassword(auth, email, password)
        console.log("hello we are from login server")
    } catch (error) {
        return error
    }
 
}