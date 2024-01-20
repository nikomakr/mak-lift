import React from 'react'
import Form from '../../components/form'
import Image from '../../components/Image'
const ContactUs = () => {
    return(
        <section>
            <div className="container">
                <h2 className="--text-center">We are available 24/7 to offer any help or support</h2>
                <p>You can call, email or complete the form below</p>
                <div className="row">
                    <div className="col-6">
                        <Image/>

                    </div>
                    <div className="col-6">
                        
                {/* create the form */}
               <Form/>

                    </div>

                </div>



            </div>
        </section>
    )
} 

export default ContactUs