import React from 'react'
import './Career.css'

function Career() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f1e465a-6898-4169-b57c-92103a1e3ade");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='career'>

      <div className="career-bg">
        <h1>Work With Us</h1>
      <div className="person-details">
      {/* <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder='Position Title' required/>
      <input type="text" name="name" placeholder='First Name' required/>
      <input type="text" name="name" placeholder='Last Name' required/>
      <input type="file" name="attachment" />
        <input type="email" name="email" placeholder='E-mail' required/>
        <input type="text" name="name" placeholder='Phone number' required/>
        <input type="text" name="name" placeholder='Year Of Exprience' required/>
        <textarea name="message" placeholder='Additional Information' required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span> */}
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <input type="file" name="attachment" />
        <input type="submit" />
      </form>
      <span>{result}</span>
      </div>
        
      </div>
    </div>
  )
}

export default Career
