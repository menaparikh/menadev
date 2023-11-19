import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import menuicon from '../Assets/menuicon.png';

import '../Styles/ComponentStyles/Sidebar.css';

function Sidebar() {
  const [navigationToggled, setNavigationToggled] = useState(false);

  const toggleNavigation = () => {
    setNavigationToggled(!navigationToggled);
  }

  return (
    <button onClick={toggleNavigation} style={{
      backgroundColor: "#8CA0D7"
    }}>
      <img src={menuicon} style={{
        width: 50,
        height: 50
      }} />
      {navigationToggled &&
        <div className="navigation-bar">
          <div className="sidebar-item">
            <NavLink to="/menadev" activeClassName="active">
              Home
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/menadev/welcome" activeClassName="active">
              Welcome
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/menadev/about" activeClassName="active">
              About
            </NavLink>
          </div>
        </div>}
    </button>

  );
}

export default Sidebar;
