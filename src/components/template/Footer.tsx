import { SYSVAR } from '../../config'
import Link from "next/link"

export default function Footer() {

    return (
        <aside className={`
            flex flex-col p-2 justify-start
            bg-none text-gray-700
            dark:bg-none
        `}>
            <div className={`flex items-center justify-center text-sm
                text-center w-full dark:text-gray-200 py-1
            `}>
                {SYSVAR.BUSSINESS.ALL_RIGHT}
            </div>
            <div className={`flex items-center justify-center text-xs
                text-center w-full dark:text-gray-200 py-1
                `}>
                <Link href={SYSVAR.DEV.SITE}>
                    <a target="_blank">{`Developer ${SYSVAR.DEV.NAME}`}</a>
                </Link>
            </div>
        </aside>
    )
}