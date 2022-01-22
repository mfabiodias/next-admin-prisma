// Pra mais icones acessar... https://heroicons.com

export const IconLogo = (height=80, width=80) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} version="1.0" viewBox="-33.5784 -75 291.0128 450">
        <path d="M138.172 0c-13.306 32.101-20.926 51.298-18.378 78.63 2.699 29.156 22.56 52.539 40.746 72.073 14.65 15.76 23.527 25.709 27.607 43.822 2.818 12.521 6.07 39.113-12.77 64.646-22.53 30.553-58.925 31.637-58.925 31.637V300s43.354-1.716 72.872-28.516c20.385-18.516 27.62-34.64 32.957-59.57 4.537-21.199-.896-51.403-14.13-74.615-7.414-13.026-15.575-23.895-23.358-32.954-15.384-17.926-26.424-29.876-36.195-44.176-9.068-13.233-14.693-24.444-14.693-36.058 0-11.211 4.537-23.155 4.537-23.155zM85.684 0c13.3 32.101 20.914 51.298 18.366 78.63-2.705 29.156-22.543 52.539-40.746 72.073-14.663 15.76-23.521 25.709-27.607 43.822-2.813 12.521-6.06 39.113 12.764 64.646 22.555 30.553 58.937 31.637 58.937 31.637V300s-43.36-1.716-72.872-28.516c-20.396-18.516-27.621-34.64-32.957-59.57-4.525-21.199.907-51.403 14.123-74.615 7.434-13.026 15.582-23.895 23.34-32.954 15.426-17.927 26.436-29.877 36.225-44.177 9.056-13.233 14.68-24.444 14.68-36.058 0-11.211-4.52-23.155-4.52-23.155z" fill="#00AEEF"/>
        <path d="M126.093 120.051c6.334 10.375 22.36 29.994 35.354 42.47 13.34 12.818 21.526 30.964 21.526 50.947 0 39.225-31.81 71.045-71.04 71.045-39.255 0-71.07-31.821-71.07-71.045 0-19.625 7.97-37.386 20.824-50.241 6.226-6.244 25.156-25.778 35.812-43.176 11.412-18.504 14.435-34.733 14.435-34.733s2.842 16.187 14.159 34.733" fill="#1B1464"/>
        <path d="M169.987 213.468c0 32.067-25.986 58.062-58.06 58.062-32.08 0-58.06-25.995-58.06-58.062 0-32.062 25.98-58.062 58.06-58.062 32.074 0 58.06 26 58.06 58.062" fill="#ED1D24"/>
    </svg>
)

export const IconHome = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
)

export const IconSettings = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
)

export const IconBell = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
)

export const IconExit = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
)

export const IconSun = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
)

export const IconMoon = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
)

export const IconCaution = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
)

export const IconMenu = (size = 6) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-${size} w-${size}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
)
