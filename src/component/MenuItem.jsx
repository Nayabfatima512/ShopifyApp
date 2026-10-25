import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function MenuItem({name,icon}) {
    return (
        <NavLink>
        <a href ="#" className='flex gap-2 items-center hover:bg-white px-2 py-1'>
            <FontAwesomeIcon icon={icon} />
            <a href=""> {name}</a>
        </a>
        </NavLink>
    )
}

export default MenuItem