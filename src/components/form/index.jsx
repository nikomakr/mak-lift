import React from 'react';
import { useFormik } from 'formik';

function Form () {
  const formik = useFormik({
    initialValues:{
      companyname:'',
      email:'',
      givenname:'',
      surname:'',
      contact:'',
      subject:'',
      message:'',
    }
  })
  console.log('Form values', formik.values)
  return (
    <>
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-center' }}>
      <label htmlFor='companyname'>Company Name</label>
      <input type="text" id='companyname' name="companyname" onChange={formik.handleChange} value={formik.values.name} required />
      <label htmlFor='email address'>Email Address</label>
      <input type="text" id='email' name="email" required />
      <label htmlFor='givenname'>Given Name</label>
      <input type="text" id='givenname' name="givenname" required />
      <label htmlFor='surname'>Surname</label>
      <input type="text" id="surname" name="surname" required />
      <label htmlFor='contact'>Contact Number</label>
      <input type="text" id="Contact" name="contact" required />
      <label htmlFor='Subject'>Subject</label>
      <input type="text" id="Subject" name="subject" required />
      <label htmlFor='message'>Message</label>
      <textarea name="message" cols="30" rows="10"></textarea>
    </form>
    <button type='submit'>Submit</button>
    </>
  );
};

export default Form;
