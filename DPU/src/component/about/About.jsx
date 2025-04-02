
import React from 'react'
import styles from "./About.module.css"
function About() {
  return (
    <>
      <div className={styles.about}>

        <div className={styles.image}>
          <img src="https://acs.dypvp.edu.in/assets/images/acs-img/clg-photo.jpg" />

        </div>

        <div className={styles.text}>

          <h2>About ACS</h2>
          <p>
            The Unitech complex in Pune houses many prestigious institutions and
            imparts knowledge and learning in various disciplines to meet global
            challenges of the 21st century. Within a very short span of time, the
            college has gained recognition for preparing and grooming students at
            undergraduate and postgraduate levels.
          </p>
          <h3>Our Vision</h3>
          <p>
            To be a national model of academic excellence aspiring for promoting
            knowledge, highest morals & values for the well-being of society.
          </p>
          <button className={styles.read}>READ MORE</button>
        </div>
      </div>

    </>
  )
}

export default About













