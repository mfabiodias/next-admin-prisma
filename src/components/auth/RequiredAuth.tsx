import Head from 'next/head'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import loadingImage from '../../../public/images/loading.gif'
import useAuth from '../../data/hook/useAuth'

export default function RequiredAuth(props) {

    const { user, loading } = useAuth()

    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-auth")) {
                                    window.location.href = "/login"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loadingImage} />
            </div>
        )
    }

    if(!loading && user?.email) {
        return renderizarConteudo()
    } else if(loading) {
        return renderizarCarregando()
    } else {
        if(typeof window !== 'undefined') router.push('/login')
        return null
    }
}