import React from "react";
import PropTypes from "prop-types";
import "./SideBar.scss";

function SideBar(props) {
  return (
    <div className="sidebar-container">
      <ul className="menu-list">
        <li className="menu-item">Home</li>
        <li className="menu-item">History</li>
      </ul>
    </div>
  );
}

SideBar.propTypes = {
  activeHeaderClass: PropTypes.bool
};

SideBar.defaultProps = {
  activeHeaderClass: false
};

export default SideBar;
