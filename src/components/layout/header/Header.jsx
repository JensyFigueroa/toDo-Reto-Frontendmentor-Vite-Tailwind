import { useEffect, useState } from "react"
import IcoMoon from "../../icons/IcoMoon"
import IcoSun from '../../icons/IcoSun'

const Header = () => {

    const [darkMode, setDarkMode] = useState(true)

    const handleChangeToogleTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => { 
        if (darkMode) {
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
     },[darkMode])

    return (
        <header className="container mx-auto px-4  pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
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