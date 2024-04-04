import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from "firebase/auth";
import auth from "../config/firebase";
import {createContext, useContext, useState, useEffect} from "react";


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [error, setError] = useState(""); 
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function updateUserProfile(user, profile){
        return updateProfile(user, profile);
    }

    function register(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login, 
        register,
        updateUserProfile,
        error,
        setError,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}