import React, { useState } from 'react'
import './Sidebar.css';
import Logo from '../../../public/logo.png'
import { sidebarData } from '../../Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    return (
        <div className='sidebar'>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <span>Sh<span>o</span>ps</span>
            </div>
            <div className="menu">
                {sidebarData.map((item, index) => {
                    return (
                        <div onClick={() => setSelected(index)} className={selected === index ? "sideItem active" : "sideItem"} key={index}>
                            <span className='icon'>{<item.icon />}</span>
                            <span className='heading'>{item.heading}</span>
                        </div>
                    )
                })}
            </div>
            <div className='signoutbtn'>
                <UilSignOutAlt />
            </div>
        </div>
    )
}

export default Sidebar
