import React, { useState } from "react";
import style from "./Gallary.module.css";

function Gallary() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.imges}>
          <img
            src="https://images.collegedunia.com/public/college_data/images/campusimage/16879399583.jpg"
            onClick={() =>
              handleImageClick(
                "https://images.collegedunia.com/public/college_data/images/campusimage/16879399583.jpg"
              )
            }
            alt="Campus 1"
          />

          <img
            src="https://images.collegedunia.com/public/college_data/images/campusimage/16879399584.jpg"
            onClick={() =>
              handleImageClick(
                "https://images.collegedunia.com/public/college_data/images/campusimage/16879399584.jpg"
              )
            }
            alt="Campus 2"
          />

          <img
            src="https://images.collegedunia.com/public/college_data/images/campusimage/16879399571.jpg"
            onClick={() =>
              handleImageClick(
                "https://images.collegedunia.com/public/college_data/images/campusimage/16879399571.jpg"
              )
            }
            alt="Campus 3"
          />
           <img
            src="https://blog.rmgoe.org/wp-content/uploads/2022/09/DY-Patil-Medical-College-Pune.webp"
            onClick={() =>
              handleImageClick(
                "https://blog.rmgoe.org/wp-content/uploads/2022/09/DY-Patil-Medical-College-Pune.webp"              )
            }
            alt="Campus 4"
            />
             <img
            src="https://www.yayskool.com/images/school/dr-d-y-patil-vidyapeeth-pune-22819992.jpg"
            onClick={() =>
              handleImageClick(
                "https://www.yayskool.com/images/school/dr-d-y-patil-vidyapeeth-pune-22819992.jpg"              )
            }
            alt="Campus 5"
            />
             <img
            src="https://blog.rmgoe.org/wp-content/uploads/2022/09/DY-Patil-Medical-College-Pune.webp"
            onClick={() =>
              handleImageClick(
                "https://blog.rmgoe.org/wp-content/uploads/2022/09/DY-Patil-Medical-College-Pune.webp"              )
            }
            alt="Campus 6"
            />
        </div>
      </div>

      {selectedImage && (
        <div className={style.modal} onClick={closeModal}>
          <div className={style.modalContent}>
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallary;
