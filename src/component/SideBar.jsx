import React from 'react'
import SideBarSection from './SideBarSection';
import MenuItem from './MenuItem';
import { menuItemList } from '../utility/data';
import { channels} from '../utility/data';
import { apps } from '../utility/data';
import SettingSection from './SettingSecion';









function SideBar() {
    return (
        <div className='p-5 w-70 bg-olive-200 flex flex-col'>
            <div>
                {
                menuItemList.map((item)=> <MenuItem  name={item.name} icon={item.icon}/>)} 
            </div>
            {/* sale section */}

            <SideBarSection title="Sales Channels" items={channels} />
            <SideBarSection title="Apps" items={apps} />
            <div className='mt-auto'>
                <SettingSection />
            </div>
        </div>

    )
}

export default SideBar