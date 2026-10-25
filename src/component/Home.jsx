import React from 'react'
import mainVidifyLogo from '../assets/mainvidifylogo.png'
import HomeVideoGenerator from './HomeVideoGenerator'
import VGSection from './VGSection'
import { AiVG, ScheduleCall, getEbook, planInfo } from '../utility/data'
import AiProduct from './AiProduct'
import OtherAppsSection from './OtherAppsSetion'
function Home() {
  return (
    <div>
      <div className='flex'>
        <div className='bg-olive-100 w-[100%]'>
          <div className='flex h-[20px] gap-2 items-center px-7 py-5 border-b-1 border-olive-200 w-full'>
            <img src={mainVidifyLogo} alt="logo" />
            <a href="#">Vidify</a>
          </div>
          <div className='mx-[8rem] my-7 '>
            <div>
              <h1 className='text-[30px] font-bold'>Welcome to Vidify</h1>
              <p className='text-[#616161]'>Enhance your video creation with the power of AI</p>
            </div>
            <HomeVideoGenerator data ={ planInfo[0]} />
            <VGSection data={AiVG} />
            <AiProduct />
            <VGSection data={ScheduleCall} />
            <OtherAppsSection />
            <VGSection data={getEbook} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home