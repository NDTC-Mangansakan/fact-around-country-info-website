import { RiCloseLine, RiEarthFill, RiMenu2Line, RiMoonFill, RiSunFill } from '@remixicon/react'
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const smallNavRef = useRef()

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark', !isDarkMode)
        document.documentElement.classList.toggle('bg-black', !isDarkMode)
        document.documentElement.classList.toggle('text-white', !isDarkMode)
    }

    const handleOpenNav = () => {
        setOpenNav(prev => !prev)
    }

    return (
        <nav className='h-[10vh] sticky top-0 left-0 right-0 flex items-center z-99 bg-white text-black dark:bg-black dark:text-white shadow-[0_5px_50px_black] dark:shadow-[0_5px_50px_white]'>
            <div className="custom-container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <RiEarthFill />
                    <h1 className='text-xl font-bold'>FactAround</h1>
                </div>
                <div className="flex items-center gap-x-5 lg:hidden">
                    <span className="cursor-pointer" onClick={handleOpenNav}>
                        <RiMenu2Line />
                    </span>
                    <span className="cursor-pointer" onClick={handleDarkModeToggle}>
                        {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
                    </span>
                </div>

                {/* nav for mobile screens */}
                <div ref={smallNavRef} className={`fixed top-0 ${openNav ? 'right-0' : '-right-[270px]'} h-screen w-[250px] pt-10 px-10 flex flex-col gap-y-10 transition-all duration-300 bg-white dark:bg-black text-black dark:text-white shadow-[0_20px_30px_black] dark:shadow-[0_20px_30px_white] z-99 lg:hidden`}>
                    <span className="cursor-pointer self-end" onClick={handleOpenNav}>
                        <RiCloseLine />
                    </span>
                    <NavLink to='/' className='text-lg font-semibold' onClick={handleOpenNav}>Home</NavLink>
                    <NavLink to='/countries' className='text-lg font-semibold' onClick={handleOpenNav}>Countries</NavLink>
                    <NavLink to='/country-quiz' className='text-lg font-semibold' onClick={handleOpenNav}>Quiz</NavLink>
                </div>

                {/* nav for lg and above screens */}
                <div className="hidden lg:flex items-center gap-x-10">
                    <NavLink to='/' className='text-lg font-semibold'>Home</NavLink>
                    <NavLink to='/countries' className='text-lg font-semibold'>Countries</NavLink>
                    <NavLink to='/country-quiz' className='text-lg font-semibold'>Quiz</NavLink>
                    <span className="cursor-pointer" onClick={handleDarkModeToggle}>
                        {isDarkMode ? <RiSunFill /> : <RiMoonFill />}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar