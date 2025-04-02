import React from 'react';
import style from "./Form.module.css";

function Form() {
  return (
    <div className={style.main}>
      <h2>Application Form</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required /> <br ></br>

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required /><br>
        </br>

        <label>Phone:</label>
        <input type="tel" placeholder="Enter your phone number" required /><br></br>
        <label> college</label>
        <input type='text' placeholder='Enter Your Prevoius College Name '/> <br></br>

        <label> Inquiry Message:</label>
        <textarea placeholder="Enter your message" required></textarea><br></br>

        <button type="submit">Submit</button><br></br>
      </form>
    </div>
  );
}

export default Form;
