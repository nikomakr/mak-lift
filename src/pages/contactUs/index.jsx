import React from 'react'
import Form from '../../components/form'
import Image from '../../components/Image'

const ContactUs = () => {
    return(
        <>
        <section>
            <div className="container">
               
                <div className="row">
                    <div className="col-6">
                        <Image/>

                    </div>
                    <div className="col-6">
                    <h2 className="--text-center">We are available 24/7 to offer any help or support</h2>
                    
                    <p>Call, Email us or complete the form below for inquiries</p>
                 <div>   
                <b> <i className="bi bi-phone-vibrate-fill" hieght="20" width="20"> +302382025708 </i></b>

               <b> <i className="bi bi-envelope-at-fill">info@mak-lift.gr</i> </b>
               </div>
               {/* <p><i className="EnvelopeFill" size={24}> info@mak-lift.gr </i></p> */}

               <hr></hr>
               
                {/* create the form */}
               <Form/>

                    </div>

                </div>



            </div>
        </section>
        </>
    )
} 

export default ContactUs