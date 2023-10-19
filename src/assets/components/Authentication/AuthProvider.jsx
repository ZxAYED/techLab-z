import { createContext, useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../../firebase.config";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(true)
    const [loading, setLoading] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const register = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    
    const GoogleProvider = new GoogleAuthProvider();
    const googleSignIn = (email, password) => {
        return signInWithPopup(auth,GoogleProvider);
    }
    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const userInfo = {
        user,
        createUser,
        loading,
        register,
        logOut,
        googleSignIn,
        SignIn

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe();
    }
        , [])

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;