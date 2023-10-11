import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import menuicon from '../Assets/menuicon.png';

import '../Styles/ComponentStyles/Sidebar.css';

function Sidebar() {
  // TODO: when we move to a new page, close the navigation bar by setting state 
  // to false 
  const [navigationToggled, setNavigationToggled] = useState(true);

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
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/welcome" activeClassName="active">
              Welcome
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </div>
          <div className="sidebar-item">
            <NavLink to="/subcourse" activeClassName="active">
              Subcourse
            </NavLink>
          </div>
        </div>}
    </button>

  );
}

export default Sidebar;
