import React from "react";
import PropTypes from "prop-types";
import "./ResponseForm.scss";
import { Form, Button } from "react-bootstrap";

function ResponseForm(props) {
  return (
    <div className="response-form-container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Mock Response Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>HTTP headers</Form.Label>
          <Form.Control as="textarea" rows="5" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>HTTP response</Form.Label>
          <Form.Control as="textarea" rows="20" />
        </Form.Group>
        <Button variant="primary">Create Mock Response</Button>
      </Form>
    </div>
  );
}

ResponseForm.propTypes = {
  activeHeaderClass: PropTypes.bool
};

ResponseForm.defaultProps = {
  activeHeaderClass: false
};

export default ResponseForm;
