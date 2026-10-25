import React from 'react'

function AiProductSecion({ title, description, icon, color, arrow }) {
    return (
        <div className='flex items-center justify-between bg-white border shadow-sm border-olive-200 rounded-lg p-4 my-3'>
            <div className='flex items-center gap-3' >
                <div className=' w-9 h-9 rounded-full flex items-center justify-center' style={{ backgroundColor: color }}>
                        <img src={icon} alt={title}  className='w-5 h-5' />
                </div>
            
                <div>
                    <p className='text-[13px] font-bold'>{title}</p>
                    <p className='text-[13px] text-[#616161]'>{description}</p>
                </div>
            </div>

            <a href="#" className='w-9 h-9 rounded-full bg-olive-100 flex items-center justify-center'>
                <img src={arrow} alt="open" className='w-4 h-4' />
            </a>
        </div>
    )
}

export default AiProductSecion