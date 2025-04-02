import React from 'react'
import styles from "./Text.module.css"

function Text() {
    return (
        <>
            <div className={styles.alll}>
                <div className={styles.images}>
                    <img src="https://i.pinimg.com/736x/65/87/b3/6587b3730502f839837b448d865871ad.jpg" />


                </div>
                <div className={styles.text}>
                    <h2>Testnomial</h2>
                    <p> "These two years of College were a pivotal turning point in my life. It wasn't just about hitting the
                         books; it was a journey of self-discovery. The professors played an important role, not just as teachers but as mentors who guided me th
                         rough both academic and personal challenges. Their unwavering support and belief in my potential empowered me to push my boundaries and 
                         strive for excellence. One of their most remarkable qualities is their ability to create a nurturing and supportive learning environment where 
                         students feel empowered to take risks and explore their potential. In reflection, these teachers are someone who not only imparts knowledge but also inspires and
                          empowers the next generation of leaders. Their dedication and passion for teaching serve as a source of motivation for us all, and we are deeply grateful for their unwavering 
                          zcommitment to our. The lessons I learned extended far beyond textbooks, teaching me resilience, adaptability, and the value of efforts to achieve something. I'm immensely grateful for the opportunities, college afforded me and the
                           invaluable lessons imparted by dedicated teachers. As I embark on the next chapter of my life, I carry with me not only the knowledge gained but also the profound impact of teachers' support and guidance." 
                           Thank you</p> <br>
                           </br>

                
                
                 <h3>Siddhita Dattu Shinde </h3>
                    <button className={styles.view} >View more</button>





                </div>
            </div>

        </>)
}

export default Text