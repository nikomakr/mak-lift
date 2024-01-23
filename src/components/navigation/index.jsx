import React from 'react'
import {Container} from 'react-bootstrap'
import "./style.css";
import BasicExample from '../basicExample/';
// import Logo from '../images/logoMak-Lift.png';


import {Container} from 'react-bootstrap';

export default function Navigation() {

  return (
    <div style={{zIndex: '10'}}>
      <div className='w-100'>
      <Container className='d-flex align-items-center justify-content-between p-2 border-bottom'>
           <div className='d-flex align-tems-center gap-md-5' >
            
          {/* <img src={Logo} alt="logo" />  */}
         </div>
         <div className='d-flex justify-content-center align-items-center gap-5 '>
            <a href="/home"><button className='text-dark btn'>Home</button></a>
            <a href="/aboutUs"><button className='text-dark btn'>AboutUs</button></a>
            <BasicExample/>
           <a href="/contactUs"><button className='text-dark btn'>Contact Us</button></a>
          <a href="/search"><button className='text-dark btn1'>Search & Hire</button></a>
      </div>
            <h5><a href="/aboutUs" className='text-dark fs-3'>About US</a></h5>
            <h5><a href="/fleet" className='text-dark fs-3'>Fleet</a></h5>
            <h5><a href="/boom" className='text-dark fs-3'>Boom</a></h5>
            <h5><a href="/scissors" className='text-dark fs-3'>Scissors</a></h5>
            <h5><a href="/mount" className='text-dark fs-3'>Mount</a></h5>
            <h5><a href="/spider" className='text-dark fs-3'>Spider</a></h5>
            <h5><a href="/contactUs" className='text-dark fs-3'>Contact Us</a></h5>
            <h5><a href="/search" className='text-dark fs-3'>Search & Hire</a></h5>
          </div>
        </Container>
      </div>

    </div>
  )
}



