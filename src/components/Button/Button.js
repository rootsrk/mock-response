import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import { Button } from "react-bootstrap";

function ButtonComponent(props) {
  return (
    <div className="button-container">
      <Button>{props.text}</Button>
    </div>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string
};

ButtonComponent.defaultProps = {
  text: ""
};

export default ButtonComponent;
