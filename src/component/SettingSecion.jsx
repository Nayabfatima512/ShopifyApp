import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';



function SettingSection() {
    return (
        <div>
            <a href="#" className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faGear} />
                <span>Setting</span>
            </a>
        </div>
    )
}

export default SettingSection