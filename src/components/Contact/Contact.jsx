import React, { useState } from 'react'
import './Contact.css'

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ad930d98-be46-47ce-8e19-120de12bffb0"); 
    // raju = 5f1e465a-6898-4169-b57c-92103a1e3ade // office = ad930d98-be46-47ce-8e19-120de12bffb0
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-con">
      
        <div className="contact-box">
        <div className="contact-details-left">
        <h1 className='contact-heading'>Contact Us</h1> <br />
          <p>Feel free to get in touch with us through any of the following means. Whether you have inquiries, collaboration opportunities, or just want to say hello, we're here to listen</p><br />
        <h2>Get In Touch</h2><br />
        <p>+91-8085354646</p><br />
        <p>spadvertising@live.com</p><br />
        </div>
        <div className="contact-details">
          <form onSubmit={onSubmit} className="contact-details-right">
          <div className="input">
          <input type="text" name='name' placeholder='Full Name' required/>
          
          <input type="tel" name='phone' placeholder='Phone Number' required/>
          <select type="text" name='service' required>
            <option value="Select Your Service">Select Your Service</option>
            <option value="Outdoor Advertising">Outdoor Advertising</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Designing Services">Designing Services</option>
            <option value="Print Media">Print Media</option>
            <option value="Branding & Strategy">Branding & Strategy</option>
            <option value="Event Promotion">Event Promotion</option>
          </select>
          
          </div>
          <div className="desc">
          <textarea name='message' className='description' type="text" placeholder='Describe Your Project...' required/>
          <button type='submit'>Enter</button> <span>{result}</span>
          </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
