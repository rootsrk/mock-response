import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ResponseForm.scss";
import { Form } from "react-bootstrap";
import ButtonComponent from "../Button/Button";

function ResponseForm(props) {
  const [mockResponseParams, setParams] = useState({
    httpResponseName: "",
    httpHeader: {},
    httpResponse: null
  });

  const [showHeaderError, setHeaderErrorFlag] = useState(false);
  const [showResponseError, setResponseErrorFlag] = useState(false);

  const checkJSONErrors = (jsonObj) => {
    try {
      eval(JSON.parse(jsonObj));
    } catch {
      return false;
    }
    return true;
  };

  const createMockResponseURL = () => {
    console.log(mockResponseParams);
  };

  const setMockResponseParam = (paramName, value) => {
    let newResponseObject = Object.assign({}, mockResponseParams);
    const stringifiedValue = JSON.stringify(value);
    let hasValidJSON = false;

    switch (paramName) {
      case "httpResponseName":
        newResponseObject.httpResponseName = value;
        break;
      case "httpHeader":
        hasValidJSON = checkJSONErrors(stringifiedValue) && eval(value);
        if (hasValidJSON) {
          newResponseObject.httpHeader = value;
        }
        setHeaderErrorFlag(!hasValidJSON);

        break;
      case "httpResponse":
        hasValidJSON = checkJSONErrors(stringifiedValue) && eval(value);
        if (hasValidJSON) {
          newResponseObject.httpResponse = value;
        }
        setResponseErrorFlag(!hasValidJSON);

        break;
      default:
        break;
    }

    setParams(newResponseObject);
  };

  return (
    <div className="response-form-container">
      <Form>
        <Form.Group controlId="httpResponseName">
          <Form.Label>Mock Response Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) =>
              setMockResponseParam("httpResponseName", e.target.value)
            }
          />
        </Form.Group>
        <Form.Group controlId="httpHeader">
          <Form.Label>HTTP Headers</Form.Label>
          {showHeaderError && (
            <Form.Text className="error-text-muted">
              Error encountered. Please check the HTTP Header Object.
            </Form.Text>
          )}
          <Form.Control
            as="textarea"
            rows="5"
            onChange={(e) => setMockResponseParam("httpHeader", e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="httpResponse">
          <Form.Label>HTTP Response</Form.Label>
          {showResponseError && (
            <Form.Text className="error-text-muted">
              Error encountered. Please check the HTTP Response Object.
            </Form.Text>
          )}
          <Form.Control
            as="textarea"
            rows="20"
            onChange={(e) =>
              setMockResponseParam("httpResponse", e.target.value)
            }
          />
        </Form.Group>
        <div className="create-btn-container">
          <ButtonComponent
            variant="primary"
            text="Create Mock Response"
            onClick={createMockResponseURL}
          />
        </div>
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
