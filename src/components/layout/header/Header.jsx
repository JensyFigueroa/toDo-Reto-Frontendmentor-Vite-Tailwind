import { useEffect, useState } from "react"
import IcoMoon from "../../icons/IcoMoon"
import IcoSun from '../../icons/IcoSun'

const initialStateDarkMode = localStorage.getItem('theme') === 'dark' //returns true or false

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    const handleChangeToogleTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => { 
        if (darkMode) {
            document.documentElement.classList.add('dark')
            // localStorage.setItem('theme', 'dark') // Traditional Method
            localStorage.theme = 'dark' //this suggests it Tailwind
        }
        else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
     },[darkMode])

    return (
        <header className="container mx-auto px-4  pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">To do List</h1>
                <button onClick={handleChangeToogleTheme}>
                    {
                        darkMode ? <IcoSun/> : <IcoMoon className="fill-black-400" /> 
                    }
                    
                </button>

            </div>

        </header>
    )
}

export default Header