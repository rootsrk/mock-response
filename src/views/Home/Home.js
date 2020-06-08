import React from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import SideBar from "../../components/SideBar/SideBar";

function Home(props) {
  return (
    <div className="home-container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="home-context"></div>
    </div>
  );
}

Home.propTypes = {
  activeHeaderClass: PropTypes.bool
};

Home.defaultProps = {
  activeHeaderClass: false
};

export default Home;
