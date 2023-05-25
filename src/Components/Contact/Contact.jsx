import React from 'react'
import "./Contact.css";
import {useState} from 'react'
import {Link} from 'react-router-dom';


const Contact = () => {
const [data,setData] = useState({name:"", email:"", phone:"", message:""});
const handleChange = (e) =>{
const name = e.target.name;
const value = e.target.value;
setData({...data, [name]: value})
}

const handleSubmit = (e) => {
e.preventDefault()
// alert(data)
window.alert("Thank you for reaching out, our team will enter in contact with you very soon!");
}

  return (
   <form method ='post' onSubmit={handleSubmit}>
    <h1>Contact <span>Us</span></h1>
    <Link to="/">
  <button className="contact-home">Go <span>Back</span> </button>
</Link>
    {/* <div className='form-container'> */}
    <input type ="form-text" name="name" id="" onChange={handleChange} value = {data.name} placeholder="Enter name"/>
    <input type ="form-email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
    <input type ="form-phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="+91"/>
    <textarea name ="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="type here..."/>
    {/* </div> */}
    <button className='form-submit-button' type ="submit">Submit</button>
  
   </form>
  )
}

export default Contact