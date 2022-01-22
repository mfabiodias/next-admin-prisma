import Sidebar from './Sidebar'
import Header from './Header'
import Main from './Main'
import RequiredAuth from '../auth/RequiredAuth'
import useAppData from '../../data/hook/useAppData'
import Footer from './Footer'

interface LayoutProps {
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { theme } = useAppData()

    return (
        <RequiredAuth>
            <div className={`${theme} flex h-screen w-screen`}>
                <Sidebar />
                <div className={`
                    flex flex-col w-full
                    bg-gray-300 dark:bg-gray-800 
                    `}>
                    <Header />
                    <Main>
                        {props.children}
                    </Main>
                    <Footer />
                </div>
            </div>
        </RequiredAuth>
    )
}


