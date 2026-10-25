import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className='flex min-h-screen flex-col'>
            <NavBar />
            <div className='flex flex-1'>
                <SideBar />
                <div className='flex flex-1 w-full flex-col bg-olive-100'>
                    <main className='flex-1'>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}