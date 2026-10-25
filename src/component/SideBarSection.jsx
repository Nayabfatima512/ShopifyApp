import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function SideBarSection({ title, items }) {
    return (
        <div>
            <div className='flex items-center justify-between my-3 text-olive-600 font-semibold'>
                <p>{title}</p>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>

            {items.map((item) => (
                <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                        `flex items-center gap-3 my-1 rounded px-2 py-1 hover:bg-white ${
                            isActive
                                ? 'bg-white font-semibold text-black'
                                : 'text-gray-600'
                        } ${item.icon ? '' : 'pl-8'}`
                    }
                >
                    {item.icon && <img src={item.icon} alt={item.label} />}
                    <span className='mr-4'>{item.label}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default SideBarSection