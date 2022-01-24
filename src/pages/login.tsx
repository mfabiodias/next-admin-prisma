/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import InputAuth from "../components/auth/InputAuth"
import { IconCaution, IconSuccess } from "../components/icons"
import useAuth from "../data/hook/useAuth"
import { SYSVAR } from '../config'
import { sleep } from '../functions'
import { isEmail, isEmpty, isSame, isLengthMin, isLengthMax } from '../functions/validators'

export default function Login(props) {

    const router = useRouter()

    const { register, login } = useAuth()

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function showError(msg, secondTime = 3) {
        setSuccess(null);
        setConfirmPassword('');
        setError(msg);
        await sleep(secondTime * 1000);
        setError(null);

        return;
    }
    
    function showSuccess(msg) {
        setError(null);
        setSuccess(msg);
        setMode('login');
        setPassword('')
        setConfirmPassword('')

        return;
    }

    async function submeter() {
        try {
            const emptyEmail = isEmpty(email)
            const validEmail = isEmail(email)
            const emptyPass = isEmpty(password)
            const samePass = isSame(password, confirmPassword)
            
            const passwordSize = { min: 6, max: 10 }

            const minPass = isLengthMin(password, passwordSize.min);
            const maxPass = isLengthMax(password, passwordSize.max);

            if(emptyEmail) return await showError('Informe seu email')
            if(!validEmail) return await showError('Informe um email válido')
            if(emptyPass) return await showError('Informe sua senha')

            if (mode === 'login') {
                const { status, message } = await login(email, password)
                if(!status) return await showError(message)
                
                router.push('/');
                return;
            } 
            
            if (mode === 'register') {
                if(!samePass) return await showError('Senhas não conferem')
                if(!minPass) return await showError(`Senhas deve conter no mínimo ${passwordSize.min} caracteres.`)
                if(!maxPass) return await showError(`Senhas deve conter no máximo ${passwordSize.max} caracteres.`)

                const { status, message, user } = await register(email, password)
                if(!status) return await showError(message)
                if(!user.enable) return showSuccess(message) 

                router.push('/perfil'); // autologin
                return;
            }
        } catch(e) {
            console.error(e?.message)
            return await showError('Problemas com nossa base de dados. Tente novamente mais tarde!')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            {SYSVAR.ADMIN.LOGIN_PAGE_LAYOUT == 2 ? <div className="hidden md:block md:w-1/2 lg:w-3/5">
                <img 
                    src="https://source.unsplash.com/random"
                    alt="Imagem de Autenticação"
                    className="h-screen w-full object-cover" />
            </div> : null}
            <div className={`m-10 ${SYSVAR.ADMIN.LOGIN_PAGE_LAYOUT == 2 ? "w-full md:w-1/2 lg:w-2/5" : "w-full sm:w-3/5 lg:w-1/3"}`}>
                <h1 className={`text-3xl font-bold mb-5`}>
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>

                {error ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconCaution()}
                        <span className="ml-3">{error}</span>
                    </div>
                ) : null}
                
                {success ? (
                    <div className={`
                        flex items-center
                        bg-green-400 text-white py-3 px-5 my-2
                        border border-green-700 rounded-lg
                    `}>
                        {IconSuccess()}
                        <span className="ml-3">{success}</span>
                    </div>
                ) : null}
                
                <InputAuth
                    label="Email"
                    type="email"
                    value={email}
                    changedValue={setEmail}
                    required
                />
                <InputAuth
                    label="Senha"
                    type="password"
                    value={password}
                    changedValue={setPassword}
                    required
                />
                {mode === 'register' ? 
                <InputAuth
                    label="Confirmar Senha"
                    type="password"
                    value={confirmPassword}
                    changedValue={setConfirmPassword}
                    required
                /> : null}

                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>


                {SYSVAR.ADMIN.REGISTER_ENABLE ?
                    <>
                        <hr className="my-6 border-gray-300 w-full" />
                        {mode === 'register' ? (
                            <p className="mt-8">
                                Já tem um cadastro?
                                <a onClick={() => setMode('login')} className={`
                                    text-blue-500 hover:text-blue-700 font-semibold
                                    cursor-pointer
                                `}> Entre com a suas credenciais</a>
                            </p>
                        ) : (
                            <p className="mt-8">
                                Novo por aqui?
                                <a onClick={() => setMode('register')} className={`
                                    text-blue-500 hover:text-blue-700 font-semibold
                                    cursor-pointer
                                `}> Crie um Conta Gratuitamente</a>
                            </p>
                        )}
                    </>
                : null}
            </div>
        </div>
    )
}
