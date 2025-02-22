import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebaseConfig.js"


export const LoginAPI = (email, password) => {
    try {
        let response = signInWithEmailAndPassword(auth, email, password)
        return response
    } catch (error) {
        return error
    }
}

export const SignUpAPI = (email, password) => {
    try {
        let response = createUserWithEmailAndPassword(auth, email, password)
        return response
    } catch (error) {
        return error
    }
}