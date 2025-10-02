import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/clientApp";

export interface UserContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name?: string) => Promise<User | null>;
    logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
    children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
            setLoading(false)
        })
        return unSubscribe
    }, [])

    async function login(email: string, password: string) {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log("login error:", err)
        }

    }

    async function register(email: string, password: string, name?: string): Promise<User | null> {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, email, password
            )

            if (name) {
                await updateProfile(userCredential.user, { displayName: name })
            }

            setUser(userCredential.user)
            return userCredential.user

        } catch (err) {
            console.log("register error:", err)
            return null
        }

    }

    async function logout() {
        try {
            await signOut(auth)
            setUser(null);
        } catch (err) {
            console.error("Logout error:", err);
        }

    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {loading ? null : children}
        </UserContext.Provider>
    )
}