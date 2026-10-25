import React from 'react'
import shopifyLogo from '../assets/logo.png'
import NavManIcon from '../assets/SideKickMajor.png'
import Bell from '../assets/bell.png'
import Chair from '../assets/chair.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  return (
    <div className='bg-zinc-900 flex items-center justify-between px-2 py-2'>
        <div>
            <img src={shopifyLogo} alt="logo" />
        </div>
        <div className='bg-[#303030] w-100 rounded-lg border-1 border-[#616161] flex items-center gap-1 px-2 py-1'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#8A8A8A]' />
            <input type="text" name="searchbar" placeholder='Search' className='w-full text-xs text-[#B5B5B5] px-4 py-1 outline-none ' />
        </div>
        <div className='flex items-center gap-3'>
            <div className='bg-olive-700  flex items-center p-2 rounded-lg'>
                <img src={NavManIcon} alt="Usericon" />
            </div>
            <div className='bg-olive-700  flex items-center p-2 rounded-lg'>
                <img src={Bell} alt="Notification" className='h-5 w-5' />
            </div>
            
            <div className='flex bg-olive-700 p-1 rounded-lg'>
                <span className='text-[#E3E3E3] font-semibold p-2'>Stellar Interiors</span>
                <img src={Chair} alt="ChairIcon" className='w-10 rounded-lg' />
            </div>
        </div>
    </div>
  )
}

export default NavBar