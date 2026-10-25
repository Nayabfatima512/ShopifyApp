import React from 'react'
import vidify from '../assets/Vidify Logo.png'
function Footer() {
    return (
        <div>
            <div className='flex h-[20px] gap-2 items-center px-7 py-5 border-b-1 border-olive-200 w-full'>
                <img src={vidify} alt="logo" />
                <a href="#">Vidify</a>
            </div>
        </div>
    )
}

export default Footer