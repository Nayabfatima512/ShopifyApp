import React from 'react'
import AiProductSecion from './AiProductSecion'
import {helpLinks} from '../utility/data'

function AiProduct() {
  return (
    <div className='bg-white border shadow-sm border-olive-200  rounded-lg text-[#303030] p-3'>
        <h2 className='text-[20px] font-semibold'>Drive More Sales with Vidify AI Product Videos</h2>
        <p className='font-sm'>Transform product marketing & your brand presence with stunning videos.</p>
        { helpLinks.map((item)=>(
             <AiProductSecion key = {item.title} {...item} />
        ))}
    </div>
  )
}

export default AiProduct