import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const signup = async (email: string, password: string, confirmPassword: string) => {
    try {
        if (password != confirmPassword) {
            throw new Error("Passwords don't match")
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log('User registered: ', user);

        return user;
    } catch (error) {
        throw error;
    }
};

export const login = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("User signed in!");
        return user;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        signOut(auth);

        console.log("User logged out!");
    } catch (error) {
        throw error;
    }
}