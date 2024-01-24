import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./style.css";

function FormikContainer() {
  const checkboxOptions = [
    { key: 'Boom Lift', value: 'cBoomLift' },
    { key: 'Scissors Lift', value: 'cScissorsLift' },
    { key: 'Tracked Spider Mount', value: 'cTrackedspidermount' },
    { key: 'Truck Mount Lift', value: 'cTruckmountLift' },
    { key: 'Not sure', value: 'cNotsure' }
  ];

  return (
    <>
      <fieldset className="group">
        <legend>Fleet Options</legend>
        <ul className="checkbox">
          {checkboxOptions.map(check => (
            <li key={check.value}>
              <input type="checkbox" id={check.value} value={check.value} />
              <label htmlFor={check.value}>{check.key}</label>
            </li>
          ))}
        </ul>
      </fieldset>

      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="startDate">Start date</Form.Label>
          <Form.Control
            className="mb-2"
            id="startDate"
            placeholder="dd-mm-yyy"
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="endDate">End date</Form.Label>
          <Form.Control
            className="mb-2"
            id="endDate"
            placeholder="dd-mm-yyy"
          />
        </Col>
      </Row>
    </>
  );
}

export default FormikContainer;  


{/* import InputGroup from 'react-bootstrap/InputGroup'; 
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup> */}