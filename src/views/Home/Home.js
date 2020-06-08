import React from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import SideBar from "../../components/SideBar/SideBar";
import ResponseForm from "../../components/ResponseForm/ResponseForm";

function Home(props) {
  return (
    <div className="home-container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="home-context">
        <ResponseForm />
      </div>
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
