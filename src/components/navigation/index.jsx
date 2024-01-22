import React from 'react'
import {Container} from 'react-bootstrap'

export default function Navigation({text1, text2, text3, text4}) {

  return (
    <div style={{zIndex: '10'}}>
      <div className='w-100'>
      <Container className='d-flex align-items-center justify-content-between p-2 border-bottom'>
           <div className='d-flex align-tems-center gap-md-5' >
            
          {/* <NavLink className='fw-600 fs-2 align-self-center' to='/'><img src={Logo} alt="firstlogo" /></NavLink> */}
         </div>
         <div className='d-flex justify-content-center align-items-center gap-5 '>
            <h5><a href="/" className='text-dark fs-3'>About US</a></h5>
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



