import React from 'react'
import generateVIcon from '../assets/videoGenerateIcon.svg'
import emptyPageImage from '../assets/notGeneratedImage.svg'
function ViewAiVideo() {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <div className='flex items-center justify-center'>
                    <img src={emptyPageImage} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center max-w-[425px]  gap-3'>
                    <p className='text-[#303030] font-semibold text-sm'>No Videos Generated Yet</p>
                    <p className='text-[#303030]  text-xs'>Seems like you have not generated any product videos yet. Ready to create your first AI video? Click the button below to get started.</p>
                    <button className='inline-flex gap-1.5 border border-olive-300 text-xs font-semibold rounded-lg p-2 shadow-2xl'><img src={generateVIcon} alt="" className='text-black' /> Create Your First Video</button>
                </div>

            </div>
        </div>
    )
}

export default ViewAiVideo