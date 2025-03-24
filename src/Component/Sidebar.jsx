import React from "react";
import "./sidebar.css";
import logo from "../assets/logo.png"; 

function Sidebar({ collapsed }) {
  return (
    <aside id="sidebar" className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <ul className="sidebar-nav" id="sidebar-nav">
         {/* Logo Section */}
         <li className="nav-item">
          <div className="logo">
            <div className="logo-circle">
              <img src={logo} alt="Logo" className="sidebar-logo" />
            </div>
          </div>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-grid"></i>
            <span>{collapsed ? "" : "Dashboard"}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-activity"></i>
            <span>{collapsed ? "" : "Data Lab"}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-bar-chart"></i>
            <span>{collapsed ? "" : "Surveys"}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-book"></i>
            <span>{collapsed ? "" : "Library"}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-cart"></i>
            <span>{collapsed ? "" : "Marketplace"}</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
