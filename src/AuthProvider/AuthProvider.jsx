import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Context/CreateContext";
import PropTypes from 'prop-types'
import { auth } from "../Firebase/firebase.init";
import { } from "firebase/auth";
import { useEffect, useState } from "react";


export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    // Sign in with google
    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //Create user
    // Create user
    const createUser = async (name, email, password) => {
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update the user's profile with the display name
            await updateProfile(user, { displayName: name });

            console.log("User created successfully:", user);
            return user; // return user if you want to use it further
        } catch (error) {
            console.error("Error creating account:", error.message);
            throw error; // rethrow error if you want to handle it elsewhere
        }
    };

    //Check Active user
    useEffect(() => {
        const clearuser = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUser(user)
            setLoading(false)
        })
        return () => {
            clearuser()
        }
    }, [])

    //Sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Sign in
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        signInWithGoogle,
        user,
        logOut,
        loading,
        createUser,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};