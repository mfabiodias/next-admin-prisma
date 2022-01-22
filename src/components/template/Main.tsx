interface MainProps {
    children?: any
}

export default function Main(props: MainProps) {
    return (
        <div className={`
            flex flex-col flex-grow mt-7 p-4
            dark:text-gray-200
        `}>
            {props.children}
        </div>
    )
}

