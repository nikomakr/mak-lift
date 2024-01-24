import MyForm from '../../components/form';
import Form from '../../components/form'
import Image from '../../components/Image'
import "./style.css";
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
                    <h2 className="--text-center">We'd love to hear from you!</h2>
                    <br/>
                    
                    <p>Fill out the form below to get in touch with our team. Please, provide details about your inquiry to help us assist you better.</p>
                    <p>We aim to respond within 24 hours!</p>
               <hr/>
               
                {/* create the form */}
               <MyForm/>

                    </div>

                </div>



            </div>
        </section>
        </>
    )
} 

export default ContactUs