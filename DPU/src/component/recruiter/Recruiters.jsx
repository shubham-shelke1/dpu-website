import React from 'react';
import style from './Recruiters.module.css';

function Recruiters() {
  return (
    <div className={style.main}>
      <h2 className={style.heading}>Our Recruiters</h2>
      
      <div className={style.scrollContainer}>
        <div className={style.scrollContent}>
          <div className={style.imageWrapper}>
            <img src="https://acs.dypvp.edu.in/assets/images/acs-img/recruiters/1.jpg" alt="Recruiter 1" />
          </div>
          <div className={style.imageWrapper}>
            <img src="https://acs.dypvp.edu.in/assets/images/acs-img/recruiters/6.jpg" alt="Recruiter 2" />
          </div>
          <div className={style.imageWrapper}>
            <img src="https://acs.dypvp.edu.in/assets/images/acs-img/recruiters/5.jpg" alt="Recruiter 3" />
          </div>
          <div className={style.imageWrapper}>
            <img src="https://acs.dypvp.edu.in/assets/images/acs-img/recruiters/4.jpg" alt="Recruiter 4" />
          </div>
          <div className={style.imageWrapper}>
            <img src="https://acs.dypvp.edu.in/assets/images/acs-img/recruiters/3.jpg" alt="Recruiter 5" />
          </div>
          <div className={style.imageWrapper}>
            <img src="https://acs.dypvp.edu.in/assets/images/acs-img/recruiters/8.jpg" alt="Recruiter 6" />
          </div>
          <div className={style.imageWrapper}>
            <img src="https://acs.dypvp.edu.in/assets/images/acs-img/recruiters/2.jpg" alt="Recruiter 7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recruiters;