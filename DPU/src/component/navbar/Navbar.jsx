import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutCollegeDropdown, setAboutCollegeDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [admissionDropdown, setAdmissionDropdown] = useState(false);
  const [academicsDropdown, setacademicsDropdown] = useState(false);
  const [iqacDropdown, setIqacDropdown] = useState(false);
  const [rankingDropdown, setRankingDropdown] = useState(false);
  const [studentCornerDropdown, setStudentCornerDropdown] = useState(false);
  const [placementsDropdown, setPlacementsDropdown] = useState(false);
  const [libraryDropdown, setLibraryDropdown] = useState(false);
  const [cultureDropdown, setCultureDropdown] = useState(false);
  const [sportDropdown, setSportDropdown] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.upper}>
        <div className={styles.scrollingText}>
          <p>
            <img src="https://acs.dypvp.edu.in/images/New.gif" alt="New Admission" />
            New ADMISSION OPEN FOR BATCH 2024-26 | Art | Commerce | Science | Certificate Courses | B.Voc | PG Diploma
          </p>
        </div>
      </div>

      <nav className={styles.nav}>
        <li><NavLink to="/">Home</NavLink></li>

        <li className={styles.dropdown} onMouseEnter={() => setAboutDropdown(true)} onMouseLeave={() => setAboutDropdown(false)}>
          <NavLink to="#">About Us </NavLink>
          <ul className={`${styles.dropdownMenu} ${aboutDropdown ? styles.show : ""}`}>
            <li className={styles.subDropdown} onMouseEnter={() => setAboutCollegeDropdown(true)} onMouseLeave={() => setAboutCollegeDropdown(false)}>
              <NavLink to="#">About College</NavLink>
              <ul className={`${styles.subDropdownMenu} ${aboutCollegeDropdown ? styles.show : ""}`}>
                <li><NavLink to="/aboutus">About Institute</NavLink></li>
                <li><a href="https://acs.dypvp.edu.in/document/NAAC-Grade-Certificate-ver-1.jpg" target="_blank" rel="noopener noreferrer">NAAC Grade Certificate</a></li>
                <li><NavLink to="/mandatiy">Mandatory Disclosure</NavLink></li>
              </ul>
            </li>
            <li className={styles.subDropdown} onMouseEnter={() => setProfileDropdown(true)} onMouseLeave={() => setProfileDropdown(false)}>
              <NavLink to="#">Profile </NavLink>
              <ul className={`${styles.subDropdownMenu} ${profileDropdown ? styles.show : ""}`}>
                <li><NavLink to="/">Chairman</NavLink></li>
                <li><NavLink to="/">Principal</NavLink></li>
              </ul>
            </li>
          </ul>
        </li>

        
        <li className={styles.dropdown} onMouseEnter={() => setAdmissionDropdown(true)} onMouseLeave={() => setAdmissionDropdown(false)}>
          <NavLink to="#">Admissions </NavLink>
          <ul className={`${styles.dropdownMenu} ${admissionDropdown ? styles.show : ""}`}>
            <li><NavLink to="/admission">Information Brochure</NavLink></li>
            <li><NavLink to="/scholr">Scholarships</NavLink></li>
          </ul>
        </li>
        
        <li className={styles.dropdown} onMouseEnter={() => setacademicsDropdown(true)} onMouseLeave={() => setacademicsDropdown(false)}>
          <NavLink to="#">Academics</NavLink>
          <ul className={`${styles.dropdownMenu} ${academicsDropdown ? styles.show : ""}`}>
            <li className={styles.subDropdown} onMouseEnter={() => setacademicsDropdown(true)} onMouseLeave={() => setacademicsDropdown(false)}>
              <NavLink to="#">Cources</NavLink>
              <ul className={`${styles.subDropdownMenu} ${academicsDropdown? styles.show : ""}`}>
              {/* <ul className={`${styles.subDropdownMenu} ${academicsDropdown ? styles.show : ""}`}> */}
                <li><NavLink to="/Arts">Arts</NavLink></li>
                <li><NavLink to="/"> Commerce</NavLink></li>

                <li><NavLink to="/">    Science</NavLink></li>
                <li><NavLink to="/abou"> Certificate Cource</NavLink></li>
                <li><NavLink to="/aboutu"> B VOC </NavLink></li>
                <li><NavLink to="/about"> P G Diploma</NavLink></li>
                

                
                

                






              {/* </ul> */}
               
              
              </ul>
            </li>
            {/* <li className={styles.subDropdown} onMouseEnter={() => setProfileDropdown(true)} onMouseLeave={() => setProfileDropdown(false)}> */}
              <li><a href="https://acs.dypvp.edu.in/Downloads/Academic-Calendar-23-24.pdf" target="_blank" rel="noopener noreferrer"> Academic Calendar</a></li>

              </ul>
            </li>
          {/* </ul> */}
        {/* </li> */}


        <li className={styles.dropdown} onMouseEnter={() => setIqacDropdown(true)} onMouseLeave={() => setIqacDropdown(false)}>
          <NavLink to="#">IQAC </NavLink>
          <ul className={`${styles.dropdownMenu} ${iqacDropdown ? styles.show : ""}`}>
          <li><a href="https://acs.dypvp.edu.in/document/2022/Distinct-Feature.pdf" target="_blank" rel="noopener noreferrer"> NAAC Accreditation
Under PARAMARSH Scheme, UGC.
T+</a></li>
          <ul className={`${styles.dropdownMenu} ${iqacDropdown ? styles.show : ""}`}>
            {/* <li><NavLink to="/iqac-reports"> Distinct Feature</NavLink></li> */}
            <li><a href="https://acs.dypvp.edu.in/document/2022/Distinct-Feature.pdf" target="_blank" rel="noopener noreferrer"> Distinct Featurr</a></li>
          
          </ul>
          </ul>
        </li>
        {/* </li> */}

        <li className={styles.dropdown} onMouseEnter={() => setRankingDropdown(true)} onMouseLeave={() => setRankingDropdown(false)}>
          <NavLink to="#">Ranking </NavLink>
          <ul className={`${styles.dropdownMenu} ${rankingDropdown ? styles.show : ""}`}>
            <li><NavLink to="?">NIRF</NavLink></li>
            <li><NavLink to="?">ARIIA</NavLink></li>
            <ul className={`${styles.subDropdownMenu} ${rankingDropdown? styles.show : ""}`}>
            <li><a href="https://acs.dypvp.edu.in/document/ARIIA-2020-21&21-22.pdf" target="_blank" rel="noopener noreferrer"> NIRF 2017-18</a></li>
"            <li><a href="https://acs.dypvp.edu.in/document/NIRF-2019.pdf" target="_blank" rel="noopener noreferrer"> NIRF 2018-19</a></li>
"            <li><a href="https://acs.dypvp.edu.in/document/NIRF-2019.pdf" target="_blank" rel="noopener noreferrer"> NIRF 2019-20</a></li>

    
            </ul>

          </ul>
        </li>

        <li className={styles.dropdown} onMouseEnter={() => setStudentCornerDropdown(true)} onMouseLeave={() => setStudentCornerDropdown(false)}>
          <NavLink to="#">Student Corner </NavLink>
          <ul className={`${styles.dropdownMenu} ${studentCornerDropdown ? styles.show : ""}`}>
            <li><NavLink to="?">Community</NavLink></li>
            <li><NavLink to="?">Club</NavLink></li>
            <ul className={`${styles.subDropdownMenu} ${studentCornerDropdown? styles.show : ""}`}>
    
                      <li><a href="https://acs.dypvp.edu.in/document/NSS-Award.pdf" target="_blank" rel="noopener noreferrer"> NCC</a></li>
                       <li><a href="https://acs.dypvp.edu.in/document/NAAC-Grade-Certificate.pdf" target="_blank" rel="noopener noreferrer"> NSS</a></li>

            <li><NavLink to="?">Student Developement Board</NavLink></li>




            </ul>

          </ul>
        </li>

        <li className={styles.dropdown} onMouseEnter={() => setPlacementsDropdown(true)} onMouseLeave={() => setPlacementsDropdown(false)}>
          <NavLink to="#">Training & Placements </NavLink>
          <ul className={`${styles.dropdownMenu} ${placementsDropdown ? styles.show : ""}`}>
            <li><NavLink to="?">Placement Cell</NavLink></li>
            <ul className={`${styles.subDropdownMenu} ${placementsDropdown? styles.show : ""}`}> 
<NavLink to="/internship">Internship</NavLink>
            </ul> 

          </ul>
        </li>

        <li className={styles.dropdown} onMouseEnter={() => setLibraryDropdown(true)} onMouseLeave={() => setLibraryDropdown(false)}>
          <NavLink to="#">Library </NavLink>
          <ul className={`${styles.dropdownMenu} ${libraryDropdown ? styles.show : ""}`}>
            <li><NavLink to="https://acs.dypvp.edu.in/library/" >Resources</NavLink></li>   
          </ul>
        </li>

        
        <li className={styles.dropdown} onMouseEnter={() => setCultureDropdown(true)} onMouseLeave={() => setCultureDropdown(false)}>
          <NavLink to="?">Culture </NavLink>
          <ul className={`${styles.dropdownMenu} ${cultureDropdown ? styles.show : ""}`}>
            <li><NavLink to="Cultural">Events</NavLink></li>
          <li>  <NavLink to="/cultural">Cultural</NavLink></li>
          </ul>
        </li>

        {/* Sports Dropdown */}
        {/* <li className={styles.dropdown} onMouseEnter={() => setSportDropdown(true)} onMouseLeave={() => setSportDropdown(false)}>
          <NavLink to="/Sports">Sports </NavLink>
          <ul className={`${styles.dropdownMenu} ${sportDropdown ? styles.show : ""}`}>
            <li><NavLink to="/Sports">Facilities</NavLink></li>
          </ul>       
        </li> */}

        {/* Events Dropdown */}
        <li className={styles.dropdown} onMouseEnter={() => setEventsDropdown(true)} onMouseLeave={() => setEventsDropdown(false)}>
          <NavLink to="?">Events </NavLink>
          <ul className={`${styles.dropdownMenu} ${eventsDropdown ? styles.show : ""}`}>
          <li><NavLink to="https://acs.dypvp.edu.in/all-events.aspx#" >Events </NavLink></li>  

          </ul>
          
        </li>
        <li>
                    <NavLink to="/gallary">Gallary</NavLink> 

        </li>
      </nav>
    </div>
  );
}

export default Navbar;
