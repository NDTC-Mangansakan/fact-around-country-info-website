import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <main className='relative font-sans'>
        <Navbar/>
        <Outlet/>
    </main>
  )
}

export default RootLayout