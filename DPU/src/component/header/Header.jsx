import React from 'react'
import styles from './Header.module.css';
function Header() {
    return (
        <div>
            <div className={styles.all}>
                <div className={styles.Topbanner}>
                    <img src="https://pharmacy.dypvp.edu.in/images/new-logo.png" alt="College Logo" />
                </div>

                <div className={styles.h}>
                    <h3>Dr. D. Y. Patil Unitech Society</h3>
                </div>

                <div className={styles.con}>
                    <h3>
                        Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri, Pune <br />
                        Re-accredited by NAAC With CGPA of 3.55 on a Four Point Scale at 'A++' Grade
                    </h3>
                        
                </div>

                    
                </div>
            </div>
        // </div>
    )
}

export default Header