// function Form (){
//     return (
//         <form className="--form-control --card--flex-center --dir-column">
//         <input 
//         type="text" 
//         placeholder="First Name"
//         name="user_firstname" required/>
//         <input 
//         type="text" 
//         placeholder="Last Name"
//         name="user_lastname" required/><input 
//         type="text" 
//         placeholder="Email"
//         name="E-mail" required/>
//         <input 
//         type="text" 
//         placeholder="Mobile"
//         name="Mobile number" required/>
//         <input 
//         type="text" 
//         placeholder="Subject"
//         name="subject" required/>
//         <textarea name="message" cols="30" rows="10"></textarea>
//         <button type='submit' className="--btn --btn-primary">Submit</button>
//     </form>
//     )
// }

// export default Form
import React from 'react';

const Form = () => {
  return (
    <>
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-center' }}>
      <label htmlFor='company name'>Company Name</label>
      <input type="text" id='company name' name="company name" required />
      <label htmlFor='email address'>Email Address</label>
      <input type="text" id='email' name="E-mail" required />
      <label htmlFor='Given Name'>Given Name</label>
      <input type="text" id='given-name' name="given name" required />
      <label htmlFor='Surname'>Surname</label>
      <input type="text" id="Surname" name="user_lastname" required />
      <label htmlFor='contact number'>Contact Number</label>
      <input type="text" id="Contact number" name="contact number" required />
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
