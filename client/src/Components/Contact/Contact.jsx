import React from 'react'
import { useState } from 'react'
import './Contact.css'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import { toast } from 'react-toastify'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "98c5c7f2-3ee7-4d71-a2d2-de79ca195f6b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success('Form submitted succesfully!')
    } else {
      setResult("Error");
      toast.error("Error")
    }
  };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Let's talk!</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
              <div className="contact-title-2">
                
                <h2>Currently available for new projects!</h2>
              </div>
                
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>pdeveloperq@gmail.com</p>
                </div>
                 <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+393471419456 <br /> +358403608091</p>
                </div>
                 <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Venice (IT) <br /> Rovaniemi (FIN)</p>
                    
                </div>
            </div>
            
            <form onSubmit={onSubmit} className='contact-right'>
                <h2>Send me an email</h2>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter you name' name='name' required/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write you message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
               
            </form>
            
        </div>
        
    </div>
  )
}

export default Contact