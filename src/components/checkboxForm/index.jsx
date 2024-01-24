import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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

  const validationSchema = Yup.object().shape({
    fleetOptions: Yup.array().min(1, 'Please select at least one fleet option.'),
    startDate: Yup.string().required('Start date is required.'),
    endDate: Yup.string().required('End date is required.')
  });

  const handleSubmit = (values) => {
    console.log('FormikContainer submitted:', values);
  };

  return (
    <Formik
      initialValues={{
        fleetOptions: [],
        startDate: '',
        endDate: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <fieldset className="group">
            <legend>Fleet Options :</legend>
            <ul className="checkbox">
              {checkboxOptions.map(check => (
                <li key={check.value}>
                  <Field
                    key={check.value}
                    type="checkbox"
                    id={check.value}
                    name="fleetOptions"
                    value={check.value}
                  />
                  <label htmlFor={check.value}>{check.key}</label>
                </li>
              ))}
            </ul>
          </fieldset>

          <Row className="align-items-center">
            <Col xs="auto">
              <label htmlFor="startDate">Start date</label>
              <Field
                type="text"
                className="mt-0"
                id="startDate"
                name="startDate"
                placeholder="dd-mm-yyy"
              />
              <ErrorMessage name="startDate" component="div" className="error" />
            </Col>
            <Col xs="auto">
              <label htmlFor="endDate">End date</label>
              <Field
                type="text"
                className="mt-0"
                id="endDate"
                name="endDate"
                placeholder="dd-mm-yyy"
              />
              <ErrorMessage name="endDate" component="div" className="error" />
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;