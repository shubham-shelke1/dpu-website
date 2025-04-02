import React from "react";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p>
          <img src="https://acs.dypvp.edu.in/images/New.gif" alt="New" /> Admission Open for the U.G. Courses
          <br />
          Academic Year 2024 - 2025
        </p>
        <h5>
          F.Y B.A., F.Y.B.Com, F.Y.B.Sc., F.Y.B.Sc. Comp. Science, F.Y. Biotechnology, F.Y. Animation,
          F.Y. Information Technology, F.Y. Cyber & Digital Science, F.Y. Fashion Technology,
          F.Y.B.Sc. Artificial Intelligence and Machine Learning, F.Y.B.Sc. Data Science.
        </h5>
        <div className={styles.contact}>
          Contact No: 7498118775, 8956597191, 8956597192, <br />
          8956597193, 8956597194
        </div>
        <div className={styles.buttonGroup}>
          <button><a href="https://acs.dypvp.edu.in/document/Admission-notice.pdf">Admission Notice</a></button>
          <button> <a href="https://acs.dypvp.edu.in/document/Fee-structure-2025-26.pdf">Fees Structure</a></button>
          <button className={styles.applyNow}>
            <NavLink to="/form">Apply Now</NavLink>
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <p>
          <img src="https://acs.dypvp.edu.in/images/New.gif" alt="New" /> Admission Open for the P.G. Courses
          <br />
          Academic Year 2024 - 2025
        </p>
        <h5>
          M.Sc., F.Y.B.Com, F.Y.M.Sc., F.Y.M.Sc. Comp. Science, F.Y. Biotechnology, F.Y. Animation,
          F.Y. Information Technology, F.Y. Cyber & Digital Science, F.Y. Fashion Technology,
          F.Y.B.Sc. Artificial Intelligence and Machine Learning, F.Y.B.Sc. Data Science.
        </h5>
        <div className={styles.contact}>
          Contact No: 7498118775, 8956597191, 8956597192, <br />
          8956597193, 8956597194
        </div>
        <div className={styles.buttonGroup}>
          <button><a href="https://acs.dypvp.edu.in/document/Admission-notice.pdf">Admission Notice</a></button>
          <button><a href="https://acs.dypvp.edu.in/document/Fee-structure-2025-26.pdf">Fees Structure</a></button>
          <button className={styles.applyNow}>
            <NavLink to="/form">Apply Now</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
