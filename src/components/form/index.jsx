import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckboxForm from '../checkboxForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./style.css";

const initialValues = {
  companyname: '',
  email: '',
  givenname: '',
  surname: '',
  contact: '',
  subject: '',
  message: '',
  fleetOptions: [],
        startDate: '',
        endDate: ''
};

const onSubmit = values => {
  console.log('MyForm data', values);
};

const checkboxOptions = [
  { key: 'Boom Lift', value: 'cBoomLift' },
  { key: 'Scissors Lift', value: 'cScissorsLift' },
  { key: 'Tracked Spider Mount', value: 'cTrackedspidermount' },
  { key: 'Truck Mount Lift', value: 'cTruckmountLift' },
  { key: 'Not sure', value: 'cNotsure' }
];

const validationSchema = Yup.object({
  companyname: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required'),
  givenname: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  contact: Yup.string().required('Required'),
})
Yup.object().shape({
  fleetOptions: Yup.array().min(1, 'Please select at least one fleet option.'),
  startDate: Yup.string().required('Start date is required.'),
  endDate: Yup.string().required('End date is required.')
});

function MyForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <label htmlFor='companyname'>Company Name</label>
          <Field type='text' id='companyname' name='companyname' />
          <ErrorMessage name='companyname' component='div' />

          <label htmlFor='email'>Email Address</label>
          <Field type='text' id='email' name='email' />
          <ErrorMessage name='email' component='div' />

          <label htmlFor='givenname'>Given Name</label>
          <Field type='text' id='givenname' name='givenname' />
          <ErrorMessage name='givenname' component='div' />

          <label htmlFor='surname'>Surname</label>
          <Field type='text' id='surname' name='surname' />
          <ErrorMessage name='surname' component='div' />

          <label htmlFor='contact'>Contact Number</label>
          <Field type='text' id='contact' name='contact' />
          <ErrorMessage name='contact' component='div' />

          <br />

          <label className='hire' htmlFor='hire'>Looking to hire</label>
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
          
          {/* <CheckboxForm /> */}

          <label htmlFor='subject'>Subject</label>
          <Field type='text' id='subject' name='subject' />

          <label htmlFor='message'>Message</label>
          <Field as='textarea' name='message' />

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;