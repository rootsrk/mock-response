import React from "react";
import PropTypes from "prop-types";
import "./Error.scss";

import { Button } from "react-bootstrap";

function ErrorPage(props) {
  return (
    <div>
      ErrorPage
      <Button>ErrorPage</Button>
    </div>
  );
}

ErrorPage.propTypes = {
  activeHeaderClass: PropTypes.bool
};

ErrorPage.defaultProps = {
  activeHeaderClass: false
};

export default ErrorPage;
