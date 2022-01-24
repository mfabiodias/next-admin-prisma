import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import LoginModel from '../../model/LoginModel'
interface AuthContextProps {
    user?: LoginModel
    loading?: boolean
    register?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<any>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

function cookieManager(logged: boolean) {
    if (logged) {
        Cookies.set('admin-auth', logged, {
            expires: 7,
            sameSite: 'strict',
        })
    } else {
        Cookies.remove('admin-auth')
    }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<LoginModel>(null)

    const router = useRouter()

    function setSession(userLogged) {
        if (userLogged?.email) {
            setUser(userLogged)
            cookieManager(true)
        } else {
            setUser(null)
            cookieManager(false)
        }
    }

    async function login(email, password) {
        setLoading(true)

        const response = await fetch('/api/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify({ email, password })
        });
        const userLogged = await response.json();

        setSession(userLogged?.user);
        
        setLoading(false);
        
        if(userLogged?.status) {
            router.push('/');
            return;
        } 

        return userLogged.message;
    }

    async function register(email, password) {
        console.log('register')
        setSession(null)
        router.push('/')
        // setLoading(true)
    }

    async function logout() {
        setSession(null)
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            logout,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
  
export default AuthContext