import React from 'react'
import style from "./Contact.module.css"

function Contact() {
  return (
<>

<div className={style.top}>
    <div className={style.map}>
        <h2 className={style.con}>

            contact us
        </h2>
   
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7601.285323131969!2d73.82272!3d18.621309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b857cadcb92d%3A0x492821714b4205bd!2sDr.%20D.%20Y.%20Patil%20Arts%2C%20Commerce%20%26%20Science%20College!5e1!3m2!1sen!2sin!4v1741244694202!5m2!1sen!2sin" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className={style.loc}>
<h2>Location</h2>
Dr. D. Y. Patil Arts, Commerce & Science College
Sant Tukaram Nagar, Pimpri, Pune – 411018
Maharashtra, India.

<h2>Email:</h2>
info.acs@dypvp.edu.in

<h2>Call:</h2>  
+91 8956597191 / +91 8956597192 
</div>
</div></>  )
}

export default Contact