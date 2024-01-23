import React from 'react'
import {Container} from 'react-bootstrap'
import "./style.css";
import BasicExample from '../basicExample/';
// import Logo from '../images/logoMak-Lift.png';


export default function Navigation({text1, text2, text3, text4}) {

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
        </Container>
      </div>

    </div>
  )
}



