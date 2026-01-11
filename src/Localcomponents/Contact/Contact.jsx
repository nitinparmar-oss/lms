
import { useState } from "react"; 
import "./Style.css"; 
import { Link } from 'react-router-dom'
 
function Contact() { 
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  }); 
 
  function handleChange(e) { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    }); 
  } 
 
  async function handleSubmit(e) { 
    e.preventDefault(); 
 
    await fetch("http://localhost:5000/api/contact", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json" 
      }, 
      body: JSON.stringify(formData) 
    }); 
 
    alert("Form submitted"); 
  } 
 
  return ( 
    <div className="contact"> 
      <h1>Contact Us</h1> 
 
      <form className="contact-form" onSubmit={handleSubmit}> 
        <input 
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
        /> 
 <br />
        <input 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
        /> 
 <br />
        <textarea 
          name="message" 
          placeholder="Message" 
          onChange={handleChange} 
        /> 
 <br />
        <button type="submit">Send</button> 
      </form> 
    </div> 
  ); 
} 
 
export default Contact; 