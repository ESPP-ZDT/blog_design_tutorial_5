import React, { useState } from "react";

const Sidebar = () => {
  // Declare a new state variable, which will be used to track the collapsed state of the sidebar
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      {/* Add a button that toggles the collapsed state of the sidebar when clicked */}
      <button onClick={() => setCollapsed(!collapsed)}>Toggle sidebar</button>
      <nav
        className={`col-md-6 d-none d-md-block sidebar text-white ${
          collapsed ? "sidebar-collapse" : ""
        }`}
        style={{
          padding: 0,
          height: "100vh",
          overflowY: "scroll",
          display: collapsed ? "flex" : "block",
          /* Add the following styles to hide the background when collapsed */
          background: collapsed ? "transparent" : "bg-light",
          boxShadow: collapsed ? "none" : "0 0.5rem 1rem rgba(0,0,0,0.15)",
          transition: "all 0.5s ease",
        }}
        
      >
        <div className="sidebar-sticky">
          {/* Use the collapsed state variable to control the visibility of the sidebar */}
          {!collapsed && (
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link 3
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      {/* Add styles for the sidebar-collapse class directly in the component */}
      <style>
        {`.sidebar-collapse {
            display: none;
          }`}
      </style>
    </div>
  );
};

export default Sidebar;
