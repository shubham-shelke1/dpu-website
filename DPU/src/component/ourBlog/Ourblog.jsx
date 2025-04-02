import React from "react";
import styles from "./Ourblog.module.css";

function Ourblog() {
  return (
    <>
      <div className={styles.al}>
        <h3 className={styles.our}>Our Blog</h3>
        
        <div className={styles.blogGrid}>
          <div className={styles.blogItem}>
            <img
              src="https://blogs.dpuerp.in/Images/Blog/52/21306-career-paths-in-psychology-from-clinical-to-industrial-psychology.png"
              alt="Career Paths in Psychology"
            />
            <h2>Career Paths in Psychology: From Clinical to Industrial Psychology</h2>
            <p>
              Diverse Career Paths in Psychology, From Clinical and Counseling.
            </p>
          </div>

~          <div className={styles.blogItem}>
            <img
              src="https://blogs.dpuerp.in/Images/Blog/52/21322-the-bystander-effect-why-people-dont-always-help-in-emergencies.jpg"
              alt="The Bystander Effect"
            />
            <h2>The Bystander Effect: Why People Don’t Always Help in Emergencies</h2>
            <p>
              Bystander Effect—Why People Hesitate to Help in Emergencies & How to Overcome It.
            </p>
          </div>
        </div>

        <button className={styles.but}>Read More</button>
      </div>
    </>
  );
}

export default Ourblog;

