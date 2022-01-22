import { createContext, useEffect, useState } from "react";
import useWindowDimensions from '../hook/useWindowDimensions';
  

// type Theme = 'dark' | ''

interface AppContextProps {
    theme?: string
    mobileMenu?: boolean,
    sidebarMenu?: boolean,
    // toggleSidebarMenu?: () => void
    toggleSidebarMenu?: (evento: any) => void
    changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props) {
    const { width } = useWindowDimensions(); //  width <= 768 (MD)
    const [mobileMenu, setMobileMenu] = useState(width <= 768)
    const [sidebarMenu, setSidebarMenu] = useState(false)
    const [theme, setTheme] = useState('dark')
    
    function changeTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    
    function toggleSidebarMenu(evento) {
        setSidebarMenu(evento)
    }

    useEffect(() => {
        setMobileMenu(width <= 768)
    }, [width])

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme')
        setTheme(saveTheme)
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            mobileMenu,
            sidebarMenu,
            toggleSidebarMenu,
            changeTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext