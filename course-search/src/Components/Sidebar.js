import React, { useState } from 'react';

function Sidebar({ isOpen }) {
  return (
    isOpen && (
        <div className="navigation-bar">
        {/* Your menu options go here */}
        <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            {/* Add more menu options as needed */}
        </ul>
    </div>
    )
  );
}

export default Sidebar;
