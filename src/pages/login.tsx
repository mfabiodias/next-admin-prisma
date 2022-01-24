import { useState, useEffect } from "react"
import Image from "next/image"
import InputAuth from "../components/auth/InputAuth"
import { IconCaution } from "../components/icons"
import useAuth from "../data/hook/useAuth"
import SYSADM from '../config'
import { sleep } from '../functions'

export default function Login(props) {

    const { register, login } = useAuth()

    const [erro, setErro] = useState(null)
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function exibirErro(msg, errorSecondTime = 2) {
        setErro(msg);
        await sleep(errorSecondTime * 1000);
        setErro(null);
    }

    async function submeter() {
        try {
            if(!email.trim().length) {
                await exibirErro('Informe o email')
            } else if(!password.trim().length) {
                await exibirErro('Informe a senha')
            } else {
                if (mode === 'login') {
                    const isLoginFail = await login(email, password)
                    if(!!isLoginFail)  await exibirErro(isLoginFail)
                } else {
                    if(password === confirmPassword) {
                        await register(email, password)
                    } else {
                        await exibirErro('Senhas não conferem')
                    }
                }
            }
        } catch(e) {
            // exibirErro(e?.message ?? 'Erro desconhecido!')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            {SYSADM.ADMIN.LOGIN_PAGE_LAYOUT == 1 ? null : <div className="hidden md:block md:w-1/2 lg:w-3/5">
                <Image src="https://source.unsplash.com/random" layout="fill" alt="backgroud image" />
            </div>}
            <div className={`m-10 ${SYSADM.ADMIN.LOGIN_PAGE_LAYOUT == 1 ? "w-full sm:w-3/5 lg:w-1/3" : "w-full md:w-1/2 lg:w-2/5"}`}>
                <h1 className={`text-3xl font-bold mb-5`}>
                    {mode === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconCaution()}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : false}
                
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


                {!SYSADM.ADMIN.REGISTER_ENABLE ? null : 
                    <>
                        <hr className="my-6 border-gray-300 w-full" />
                        {mode === 'register' ? (
                            <p className="mt-8">
                                Já faz parte da nossa comunidade?
                                <a onClick={() => setMode('login')} className={`
                                    text-blue-500 hover:text-blue-700 font-semibold
                                    cursor-pointer
                                `}> Entre com a suas Credenciais</a>
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
                }
            </div>
        </div>
    )
}
