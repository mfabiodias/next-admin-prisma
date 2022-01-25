import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import LoginModel from '../../model/LoginModel'
interface AuthContextProps {
    user?: LoginModel
    loading?: boolean
    register?: (name: string, email: string, password: string) => Promise<any>
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

    function setSession(userLogged) {
        if (!!userLogged?.enable) {
            setUser(userLogged)
            cookieManager(true)
        } else {
            setUser(null)
            cookieManager(false)
        }
    }

    async function postData(userInputData, endpoint) {
        setLoading(true)

        const response = await fetch(`/api/${endpoint}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(userInputData)
        });
        const responseData = await response.json();

        setSession(responseData?.user);
        
        setLoading(false);
        
        return responseData;
    }

    async function login(email: string, password: string): Promise<any> {
        const userInputData = { email, password };
        return await postData(userInputData, 'login');
    }

    async function register(name: string, email: string, password: string): Promise<any> {
        const userInputData = { name, email, password };
        return await postData(userInputData, 'register');
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