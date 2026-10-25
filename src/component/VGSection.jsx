import React from 'react'

function VGSection({data}) {
    return (
        <div className='bg-white border shadow-sm border-olive-200  rounded-lg my-3 h-40 overflow-hidden' >
            <div className='flex h-full'>
                <div className='w-full max-w-[300px] '>
                    <img src={data.Img} alt="" className='h-full w-full' />
                </div>
                <div className='pt-2 pr-2 pl-2'>
                    <div className='flex justify-between my-2 items-center'>
                        <p className='text-[13px] font-bold'>{data.title}</p>
                        <a href="#"><img src={data.icon} alt="" /></a>
                    </div>
                    <div>
                        <p className='text-[13px] text-[#616161] my-2'>{data.content}</p>
                        <button className='flex items-center gap-1 bg-white px-2 py-1 border text-xs font-semibold shadow-sm border-olive-200 rounded-lg text-[#303030] '>
                            <img src={data.btnIcon} alt="" />
                             {data.btntext}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VGSection