import React from 'react'
import planIcon from '../assets/Plain button.png'
import { Progress } from 'rsuite'

function HomeVideoGenerator({data}) {
    const percent = (data.used / data.limit) * 100
  return (
    <div className='bg-white p-3 rounded-lg mt-7'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <p className='text-[13px] font-bold'>Video Generator</p>
                <img src={planIcon} alt="suggestion" />
            </div>
            <a href="#" className='bg-white px-2 py-1 border text-xs font-semibold shadow-sm border-olive-200 rounded-lg text-[#303030]'>Upgrade your plan</a>
        </div>
        <div>
        <p className='text-[11px]'>Current Plan : <span className='text-[#303030] font-bold'> {data.planName} {data.limit} videos/Month</span></p>
        <p className='text-[13px] text-[#616161]'>{data.used}/{data.limit} Videos</p>
        </div>
         <Progress.Line percent={percent} planInfo={false} strokeColor='#29845A' />
    </div>
  )
}

export default HomeVideoGenerator