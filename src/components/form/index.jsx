import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CheckboxForm from '../checkboxForm';
import "./style.css";

const initialValues = {
  companyname: '',
  email: '',
  givenname: '',
  surname: '',
  contact: '',
  subject: '',
  message: '',
};

const onSubmit = values => {
  console.log('Form data', values);
};

const validationSchema = Yup.object({
  companyname: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required'),
  givenname: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  contact: Yup.string().required('Required'),
});

function MyForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
        <CheckboxForm />

        <label htmlFor='subject'>Subject</label>
        <Field type='text' id='subject' name='subject' />

        <label htmlFor='message'>Message</label>
        <Field as='textarea' name='message' />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
}

export default MyForm;