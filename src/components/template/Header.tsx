import Title from './Title'
import { useState } from "react"
import ChangeTheme from './ChangeTheme'
import useAppData from '../../data/hook/useAppData'
import UserAvatar from './UserAvatar'
import { IconMenu } from '../icons'
import SYSADM from '../../config'

export default function Header(props) {
    const { theme, changeTheme, mobileMenu, sidebarMenu, toggleSidebarMenu } = useAppData()

    function changeMenu() {
        toggleSidebarMenu(!sidebarMenu)
    }

    return (
        <div className={`flex h-8 mt-5 dark:text-gray-200`}>
            { !mobileMenu ? null : <div className={`flex items-center cursor-pointer pl-4`}>
                <span onClick={changeMenu}>
                    {IconMenu(8)}
                </span>
            </div> }
            <div className={`flex items-center font-semibold text-2xl pl-4`}>
                {SYSADM.BUSSINESS.NAME}
            </div>
            <div className={`flex flex-grow justify-end items-center pr-4 `}>
                <ChangeTheme theme={theme} changeTheme={changeTheme} />
            </div>
            <div className={`flex justify-end items-center pr-4`}>
                <UserAvatar />
            </div>
        </div>
    )
}