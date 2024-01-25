import React, {useEffect, useState}from 'react';
import Image from '../../components/Image'
import Api from '../../utils/api'
import MyForm from '../../components/form';
import "./style.css";
const ContactUs = () => {
    const [translator, setTranslator] = useState([]);
    const [language, setLanguage] = useState('en'); // Default language is English
  
    useEffect(() => {
      const translateHTML = async () => {
    //     // Call the translation API or library here with the HTML content and the selected language
           const data = await Api.getLatestTranslator()
          console.log(data.data)
           console.log(data)
        setTranslator(data.data)
      };
  
      translateHTML();
    }, [language]);
  
    // const handleLanguageChange = (event) => {
    //   setLanguage(event.target.value);
    // };
    return(
        <>
        <section>
            <div className="container">
               
                <div className="row">
                    <div className="col-6">
                        <Image/>

                    </div>
                    <div className="col-6">
                    <h2 className="--text-center"> We'd love to hear from you!</h2>
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