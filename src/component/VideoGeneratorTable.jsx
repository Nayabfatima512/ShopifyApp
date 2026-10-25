import React, { useState } from 'react'
import HomeVideoGenerator from './HomeVideoGenerator'
import { planInfo } from "../utility/data"
import mainVidifyLogo from '../assets/mainvidifylogo.png'
import filterIcon from '../assets/Filter.png'
import swapIcon from '../assets/swapIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import TableData from './TableData'
import ViewAiVideo from './ViewAiVideo'

// Tab component
function MyTab() {
  const tabs = ['Video Generation', 'View AI Videos']
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <div className="w-full">
      {/* Tabs and action buttons */}
      <div className="flex flex-wrap justify-between items-center gap-3 p-3 border-b border-olive-200">
        <div className="flex items-center gap-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={` text-xs  ${
                activeTab === tab
                  ? ' text-[#303030] bg-olive-200 px-3 py-2 rounded-lg text-[550]'
                  : 'bg-white text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button className="flex items-center gap-2 p-2 shadow-sm shadow-[#B5B5B5] rounded-lg">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#8A8A8A]"
            />
            <img src={filterIcon} alt="Filter" />
          </button>

          <button className="p-2 shadow-sm shadow-[#B5B5B5] rounded-lg">
            <img src={swapIcon} alt="Sort" />
          </button>
        </div>
      </div>

      {/* Active tab content */}
      <div className="mt-4">
        {activeTab === 'Video Generation' && <TableData />}
        {activeTab === 'View AI Videos' && <ViewAiVideo />}
      </div>
    </div>
  )
}

function VideoGeneratorTable() {
  return (
    <div className="min-h-screen w-full bg-olive-100">
      {/* Header */}
      <div className="flex h-16 items-center gap-2 border-b border-olive-200 px-7">
        <img
          src={mainVidifyLogo}
          alt="Vidify logo"
          className="h-8 w-auto"
        />
        <a href="#" className="font-semibold">
          Vidify
        </a>
      </div>

      {/* Main content */}
      <main className="mx-auto w-full max-w-[1600px] px-4 py-7 sm:px-6 lg:px-8">
        <h1 className="mb-5 text-lg font-semibold text-[#303030]">
          Video Generation
        </h1>

        <HomeVideoGenerator data={planInfo[1]} />

        {/* Table container */}
        <div className="mt-5 overflow-hidden rounded-lg bg-white">
          <MyTab />
        </div>
      </main>
    </div>
  )
}

export default VideoGeneratorTable