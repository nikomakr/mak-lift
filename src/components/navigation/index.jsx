import React from 'react'
import {Container} from 'react-bootstrap'
import "./style.css";
import BasicExample from '../basicExample/';
// import NavLogo from '../navLogo/';
// import {Container} from 'react-bootstrap';

export default function Navigation() {

  return (
    <div style={{zIndex: '10'}}>
      <div className='w-100'>
      <Container className='d-flex align-items-center justify-content-between p-2 border-bottom'>
           <div className='d-flex align-tems-center gap-md-5' >
         </div>
         <div className='d-flex justify-content-center align-items-center gap-5 '>
            <a href="/"><button className='text-dark btn1'>Home</button></a>
            <a href="/aboutUs"><button className='text-dark btn1'>AboutUs</button></a>
            <BasicExample/>
           <a href="/contactUs"><button className='text-dark btn1'>Contact Us</button></a>
          <a href="/search"><button className='text-dark btn1'>Search & Hire</button></a>
      </div>
        </Container>
        </div>
      </div>
  )
}



