import React, { useState } from 'react';
import * as FaIcons  from "react-icons/fa";
import * as AiIcons  from "react-icons/ai";
import * as SiIcons  from "react-icons/si";
import * as MdIcons  from "react-icons/md";
import {Link} from 'react-router-dom';
import './DashboardNav.css';
import {IconContext} from 'react-icons';
import manImage from '../../../images/man.jpg';

const sidebarData = [
    {
        title:'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text',
    },
    {
        title:'Leads',
        path: '/leads',
        icon:<SiIcons.SiGoogleads/>,
        cName:'nav-text',
    },
    {
        title:'Contacts',
        path: '/contacts',
        icon:<AiIcons.AiFillContacts/>,
        cName:'nav-text',
    },
    {
        title:'Deals',
        path: '/deals',
        icon:<FaIcons.FaIdeal/>,
        cName:'nav-text',
    },
    {
        title:'Accounts',
        path: '/accounts',
        icon:<MdIcons.MdAccountCircle/>,
        cName:'nav-text',
    },
]

const DashboardNav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                    <div className="me-4">
                        <div className="btn-group">
                                <img data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" src={manImage} alt="" className="img-fluid rounded-circle" style={{width:'40px', height:'40px', cursor:'pointer'}}/>
                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                <li><Link to="/edit-profile" className="dropdown-item">Edit Profile</Link></li>
                                <li><Link to="/login" className="dropdown-item">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <nav className="nav-menu">
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    </li>
                    {
                        sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </IconContext.Provider>
    );
};

export default DashboardNav;