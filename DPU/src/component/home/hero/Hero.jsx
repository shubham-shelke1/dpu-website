import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

function Hero() {
  const images = [
    "https://acs.dypvp.edu.in/assets/images/acs-img/slider/1.jpg",
     "https://acs.dypvp.edu.in/assets/images/acs-img/slider/3.jpg",
     "https://acs.dypvp.edu.in/assets/images/acs-img/slider/2.jpg "
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Auto-Scrolling Text */}
      {/* <div className={styles.scrollingText}>
        <p>📢  New ADMISSION OPEN FOR BATCH 2024-26 | Art | Commerce | Science | Certificate Courses | B.Voc | PG Diploma 📢</p>
      </div> */}

      {/* Image Carousel */}
      <div className={styles.imgContainer}>
        <img src={images[currentIndex]} alt="College Events" className={styles.image} />
      </div>
    </>
  );
}

export default Hero;
