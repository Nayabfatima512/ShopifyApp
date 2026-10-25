import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { storeApps } from '../utility/data'

function OtherAppsSection() {
  const [index, setIndex] = useState(0)

  const app = storeApps[index]   // abhi wali app

  const handleNext = () => setIndex(index + 1)
  const handlePrev = () => setIndex(index - 1)

  return (
    <div className='bg-white border shadow-sm border-olive-200 rounded-lg my-3 overflow-hidden'>
      {/* header */}
      <div className='flex items-center justify-between px-4 pt-4'>
        <p className='text-[13px] font-bold'>Other apps from Storeware</p>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>

      {/* image + content */}
      <div className='flex gap-5 p-4'>
        <img
          src={app.image}
          alt={app.title}
          className='w-[400px] h-[220px] object-cover rounded-lg'
        />

        <div>
          <p className='text-[13px] font-bold'>{app.title}</p>
          <p className='text-[13px] text-[#616161] my-2'>{app.description}</p>

          <ul className='list-disc pl-5 text-[13px] text-[#616161] mb-3'>
            {app.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <button className='bg-white px-2 py-1 border text-xs font-semibold shadow-sm border-olive-200 rounded-lg text-[#303030]'>
            {app.btnText}
          </button>
        </div>
      </div>

      {/* arrows */}
      <div className='bg-olive-200 flex justify-end gap-4 border-t border-olive-200 px-4 py-2'>
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className='disabled:opacity-30 disabled:cursor-not-allowed'
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={handleNext}
          disabled={index === storeApps.length - 1}
          className='disabled:opacity-30 disabled:cursor-not-allowed'
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  )
}

export default OtherAppsSection