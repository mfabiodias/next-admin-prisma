import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import UserModel from '../../model/UserModel'

interface AuthContextProps {
    user?: UserModel
    loading?: boolean
    register?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
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
    const [loading, setLoading] = useState(true)
    const [user, setuser] = useState<UserModel>(null)

    async function setSession(userSession) {
        const user = {
            uid: '12213213',
            name: 'Fabio Dias',
            email: 'mfabiodias@gmail.com',
            image: null
        }
        
        if (userSession?.email) {
            setuser(user)
            cookieManager(true)
            setLoading(false)
            return user.email
        } else {
            setuser(null)
            cookieManager(false)
            setLoading(false)
            return false
        }
    }

    async function login(email, password) {
        console.log('login')
        await setSession({email, password})
        route.push('/')
        // setLoading(true)
    }

    async function register(email, password) {
        console.log('register')
        await setSession({email, password})
        route.push('/')
        // setLoading(true)
    }

    async function logout() {
        console.log('sair')
        await setSession(null)
        // setLoading(true)
    }

    useEffect(() => {
        // if(Cookies.get('admin-auth')) {
        //     const cancelar = firebase.auth().onIdTokenChanged(setSession)
        //     return () => cancelar()
        // } else {
        // }
        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext