// Sidebar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuicon from '../Assets/menuicon.png';
import '../Styles/ComponentStyles/Sidebar.css';

function Sidebar() {
  const [navigationToggled, setNavigationToggled] = useState(false);

  const toggleNavigation = () => {
    setNavigationToggled(!navigationToggled);
  };

  return (
    <div className={`sidebar-container ${navigationToggled ? 'open' : ''}`}>
      <button onClick={toggleNavigation} className="menu-button">
        <img src={menuicon} alt="menu icon" />
      </button>

      <div className="navigation-bar">
        <div className="sidebar-item">
          <NavLink to="/menadev" activeClassName="active" onClick={toggleNavigation}>
            Home
          </NavLink>
        </div>
        <div className="sidebar-item">
          <NavLink to="/menadev/welcome" activeClassName="active" onClick={toggleNavigation}>
            Welcome
          </NavLink>
        </div>
        <div className="sidebar-item">
          <NavLink to="/menadev/about" activeClassName="active" onClick={toggleNavigation}>
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
