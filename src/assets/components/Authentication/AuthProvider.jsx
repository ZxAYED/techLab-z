import { createContext, useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const auth = getAuth()
    const [user, setUser] = useState(true)
    const [loading, setLoading] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const register = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const userInfo = {
        user,
        createUser,
        loading,
        register

    }
    // useEffect(()=>{
    //     const unSubscribe =onAuthStateChanged(auth, (user)=>{
    //         setUser(user)
    //     setLoading(true)
    //    })
    // return ()=>{  unSubscribe()} ,[] }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;