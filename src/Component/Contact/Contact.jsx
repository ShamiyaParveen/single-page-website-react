import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"


const Contact = () => {
  
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6eebcf83-8d8b-430d-b00f-78bca1153934");

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
    <div className='contact' id="Contact">
        <div className="contact-col">
            <h3>Send us message <img src={msg_icon} alt="contact-img" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus nemo harum sit necessitatibus ab sapiente recusandae quis, assumenda iste tempore minus reprehenderit libero dolorem voluptatum nobis eaque vitae odio.</p>
            <ul>
                <li><img src={mail_icon} alt="contact-img" />shamiya9922@gmail.com</li>
                <li><img src={phone_icon} alt="contact-img" />+21 6003292822</li>
                <li><img src={location_icon} alt="contact-img" />Prayagraj, Uttar Pradesh</li>

            </ul>
        </div>
         <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required />
                <label> Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required />
                <label>Write Your Message Here</label>
                <textarea name='message' rows="6" placeholder='Enter Your Message' />
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="img" /></button>
            </form>
            <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact