import { faBars, faCalculator, faCalendar, faChartPie, faClock, faDashboard, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.scss';


function Sidebar(props) {
    return (
        <div className='sidebar-container'>
            <div className='toggle-btn'>
                <FontAwesomeIcon icon={faBars} className='nav-toggle-icon'></FontAwesomeIcon>
            </div>
            <div className='sidebar-nav'>
                <nav>
                    <FontAwesomeIcon icon={faDashboard} className='nav-icons'></FontAwesomeIcon>
                </nav>
                <nav className='active'>
                    <FontAwesomeIcon icon={faClock} className='nav-icons'></FontAwesomeIcon>
                </nav>
                <nav>
                    <FontAwesomeIcon icon={faUser} className='nav-icons'></FontAwesomeIcon>
                </nav>
                <nav>
                    <FontAwesomeIcon icon={faChartPie} className='nav-icons'></FontAwesomeIcon>
                </nav>
                <nav>
                    <FontAwesomeIcon icon={faCalendar} className='nav-icons'></FontAwesomeIcon>
                </nav>
                <nav>
                    <FontAwesomeIcon icon={faCalculator} className='nav-icons'></FontAwesomeIcon>
                </nav>


            </div>
        </div>
    );
}

export default Sidebar;