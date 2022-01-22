import Image from "next/image";
import { IconLogo } from "../icons";
import iconLogoPNG from '../../../public/images/logo.png'

export default function Logo() {
    return (
        IconLogo()
        // <div className={`
        //     flex flex-col items-center justify-center
        //     h-12 w-12 rounded-full
        //     bg-white
        // `}>
        //     {/* CSS ONLY */}
        //     {/* <div className="h-3 w-3 rounded-full bg-red-600 mb-0.5" />
        //     <div className="flex mt-0.5">
        //         <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5" />
        //         <div className="h-3 w-3 rounded-full bg-green-600 ml-0.5" />
        //     </div> */}

        //     {/* Com SVG */}
        //     {/* {IconLogo()} */}

        //     {/* Com file PNG/JPG/GIF */}
        //     {/* <Image src={iconLogoPNG} width="32" height="32" /> */}
        // </div>
    )
}