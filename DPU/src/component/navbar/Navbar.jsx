import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  // State for dropdown menus
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutCollegeDropdown, setAboutCollegeDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [admissionDropdown, setAdmissionDropdown] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);
  const [iqacDropdown, setIqacDropdown] = useState(false);
  const [rankingDropdown, setRankingDropdown] = useState(false);
  const [studentCornerDropdown, setStudentCornerDropdown] = useState(false);
  const [placementsDropdown, setPlacementsDropdown] = useState(false);
  const [libraryDropdown, setLibraryDropdown] = useState(false);
  const [cultureDropdown, setCultureDropdown] = useState(false);
  const [sportDropdown, setSportDropdown] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);
  
  // State for mobile menu
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close all dropdowns when a link is clicked (for mobile)
  const closeAllDropdowns = () => {
    if (isMobile) {
      setAboutDropdown(false);
      setAboutCollegeDropdown(false);
      setProfileDropdown(false);
      setAdmissionDropdown(false);
      setAcademicsDropdown(false);
      setIqacDropdown(false);
      setRankingDropdown(false);
      setStudentCornerDropdown(false);
      setPlacementsDropdown(false);
      setLibraryDropdown(false);
      setCultureDropdown(false);
      setSportDropdown(false);
      setEventsDropdown(false);
      setMenuOpen(false);
    }
  };

  // Toggle dropdown for mobile
  const toggleDropdown = (dropdownSetter) => {
    if (isMobile) {
      dropdownSetter(prev => !prev);
    }
  };

  return (
    <div className={styles.navbar}>
      {/* Scrolling announcement */}
      <div className={styles.upper}>
        <div className={styles.scrollingText}>
          <p>
            <img src="https://acs.dypvp.edu.in/images/New.gif" alt="New Admission" />
            New ADMISSION OPEN FOR BATCH 2024-26 | Art | Commerce | Science | Certificate Courses | B.Voc | PG Diploma
          </p>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className={styles.mobileMenuButton} onClick={toggleMenu}>
        <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <li><NavLink to="/" onClick={closeAllDropdowns}>Home</NavLink></li>

        {/* About Us Dropdown */}
        <li 
          className={styles.dropdown} 
          onMouseEnter={!isMobile ? () => setAboutDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setAboutDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setAboutDropdown) : undefined}
        >
          <NavLink to="#">About Us</NavLink>
          <ul className={`${styles.dropdownMenu} ${aboutDropdown ? styles.show : ""}`}>
            <li 
              className={styles.subDropdown}
              onMouseEnter={!isMobile ? () => setAboutCollegeDropdown(true) : undefined}
              onMouseLeave={!isMobile ? () => setAboutCollegeDropdown(false) : undefined}
              onClick={isMobile ? () => toggleDropdown(setAboutCollegeDropdown) : undefined}
            >
              <NavLink to="#">About College</NavLink>
              <ul className={`${styles.subDropdownMenu} ${aboutCollegeDropdown ? styles.show : ""}`}>
                <li><NavLink to="/aboutus" onClick={closeAllDropdowns}>About Institute</NavLink></li>
                <li><a href="https://acs.dypvp.edu.in/document/NAAC-Grade-Certificate-ver-1.jpg" target="_blank" rel="noopener noreferrer" onClick={closeAllDropdowns}>NAAC Grade Certificate</a></li>
                <li><NavLink to="/mandatiy" onClick={closeAllDropdowns}>Mandatory Disclosure</NavLink></li>
              </ul>
            </li>
            <li 
              className={styles.subDropdown}
              onMouseEnter={!isMobile ? () => setProfileDropdown(true) : undefined}
              onMouseLeave={!isMobile ? () => setProfileDropdown(false) : undefined}
              onClick={isMobile ? () => toggleDropdown(setProfileDropdown) : undefined}
            >
              <NavLink to="#">Profile</NavLink>
              <ul className={`${styles.subDropdownMenu} ${profileDropdown ? styles.show : ""}`}>
                <li><NavLink to="/" onClick={closeAllDropdowns}>Chairman</NavLink></li>
                <li><NavLink to="/" onClick={closeAllDropdowns}>Principal</NavLink></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Admissions Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setAdmissionDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setAdmissionDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setAdmissionDropdown) : undefined}
        >
          <NavLink to="#">Admissions</NavLink>
          <ul className={`${styles.dropdownMenu} ${admissionDropdown ? styles.show : ""}`}>
            <li><NavLink to="/admission" onClick={closeAllDropdowns}>Information Brochure</NavLink></li>
            <li><NavLink to="/scholr" onClick={closeAllDropdowns}>Scholarships</NavLink></li>
          </ul>
        </li>
        
        {/* Academics Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setAcademicsDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setAcademicsDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setAcademicsDropdown) : undefined}
        >
          <NavLink to="#">Academics</NavLink>
          <ul className={`${styles.dropdownMenu} ${academicsDropdown ? styles.show : ""}`}>
            <li className={styles.subDropdown}>
              <NavLink to="#">Courses</NavLink>
              <ul className={`${styles.subDropdownMenu} ${academicsDropdown ? styles.show : ""}`}>
                <li><NavLink to="/Arts" onClick={closeAllDropdowns}>Arts</NavLink></li>
                <li><NavLink to="/" onClick={closeAllDropdowns}>Commerce</NavLink></li>
                <li><NavLink to="/" onClick={closeAllDropdowns}>Science</NavLink></li>
                <li><NavLink to="/abou" onClick={closeAllDropdowns}>Certificate Course</NavLink></li>
                <li><NavLink to="/aboutu" onClick={closeAllDropdowns}>B VOC</NavLink></li>
                <li><NavLink to="/about" onClick={closeAllDropdowns}>P G Diploma</NavLink></li>
              </ul>
            </li>
            <li>
              <a 
                href="https://acs.dypvp.edu.in/Downloads/Academic-Calendar-23-24.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeAllDropdowns}
              >
                Academic Calendar
              </a>
            </li>
          </ul>
        </li>

        {/* IQAC Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setIqacDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setIqacDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setIqacDropdown) : undefined}
        >
          <NavLink to="#">IQAC</NavLink>
          <ul className={`${styles.dropdownMenu} ${iqacDropdown ? styles.show : ""}`}>
            <li>
              <a 
                href="https://acs.dypvp.edu.in/document/2022/Distinct-Feature.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeAllDropdowns}
              >
                Distinct Feature
              </a>
            </li>
            <li>
              <a 
                href="https://acs.dypvp.edu.in/document/2022/Distinct-Feature.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeAllDropdowns}
              >
                NAAC Accreditation Under PARAMARSH Scheme, UGC.
              </a>
            </li>
          </ul>
        </li>

        {/* Ranking Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setRankingDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setRankingDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setRankingDropdown) : undefined}
        >
          <NavLink to="#">Ranking</NavLink>
          <ul className={`${styles.dropdownMenu} ${rankingDropdown ? styles.show : ""}`}>
            <li><NavLink to="?" onClick={closeAllDropdowns}>NIRF</NavLink></li>
            <li><NavLink to="?" onClick={closeAllDropdowns}>ARIIA</NavLink></li>
            <ul className={`${styles.subDropdownMenu} ${rankingDropdown ? styles.show : ""}`}>
              <li>
                <a 
                  href="https://acs.dypvp.edu.in/document/ARIIA-2020-21&21-22.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeAllDropdowns}
                >
                  NIRF 2017-18
                </a>
              </li>
              <li>
                <a 
                  href="https://acs.dypvp.edu.in/document/NIRF-2019.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeAllDropdowns}
                >
                  NIRF 2018-19
                </a>
              </li>
              <li>
                <a 
                  href="https://acs.dypvp.edu.in/document/NIRF-2019.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeAllDropdowns}
                >
                  NIRF 2019-20
                </a>
              </li>
            </ul>
          </ul>
        </li>

        {/* Student Corner Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setStudentCornerDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setStudentCornerDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setStudentCornerDropdown) : undefined}
        >
          <NavLink to="#">Student Corner</NavLink>
          <ul className={`${styles.dropdownMenu} ${studentCornerDropdown ? styles.show : ""}`}>
            <li><NavLink to="?" onClick={closeAllDropdowns}>Community</NavLink></li>
            <li><NavLink to="?" onClick={closeAllDropdowns}>Club</NavLink></li>
            <ul className={`${styles.subDropdownMenu} ${studentCornerDropdown ? styles.show : ""}`}>
              <li>
                <a 
                  href="https://acs.dypvp.edu.in/document/NSS-Award.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeAllDropdowns}
                >
                  NCC
                </a>
              </li>
              <li>
                <a 
                  href="https://acs.dypvp.edu.in/document/NAAC-Grade-Certificate.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeAllDropdowns}
                >
                  NSS
                </a>
              </li>
              <li><NavLink to="?" onClick={closeAllDropdowns}>Student Development Board</NavLink></li>
            </ul>
          </ul>
        </li>

        {/* Training & Placements Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setPlacementsDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setPlacementsDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setPlacementsDropdown) : undefined}
        >
          <NavLink to="#">Training & Placements</NavLink>
          <ul className={`${styles.dropdownMenu} ${placementsDropdown ? styles.show : ""}`}>
            <li><NavLink to="?" onClick={closeAllDropdowns}>Placement Cell</NavLink></li>
            <ul className={`${styles.subDropdownMenu} ${placementsDropdown ? styles.show : ""}`}>
              <li><NavLink to="/internship" onClick={closeAllDropdowns}>Internship</NavLink></li>
            </ul>
          </ul>
        </li>

        {/* Library Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setLibraryDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setLibraryDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setLibraryDropdown) : undefined}
        >
          <NavLink to="#">Library</NavLink>
          <ul className={`${styles.dropdownMenu} ${libraryDropdown ? styles.show : ""}`}>
            <li>
              <NavLink 
                to="https://acs.dypvp.edu.in/library/" 
                onClick={closeAllDropdowns}
              >
                Resources
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Culture Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setCultureDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setCultureDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setCultureDropdown) : undefined}
        >
          <NavLink to="?">Culture</NavLink>
          <ul className={`${styles.dropdownMenu} ${cultureDropdown ? styles.show : ""}`}>
            <li><NavLink to="Cultural" onClick={closeAllDropdowns}>Events</NavLink></li>
            <li><NavLink to="/cultural" onClick={closeAllDropdowns}>Cultural</NavLink></li>
          </ul>
        </li>

        {/* Events Dropdown */}
        <li 
          className={styles.dropdown}
          onMouseEnter={!isMobile ? () => setEventsDropdown(true) : undefined}
          onMouseLeave={!isMobile ? () => setEventsDropdown(false) : undefined}
          onClick={isMobile ? () => toggleDropdown(setEventsDropdown) : undefined}
        >
          <NavLink to="?">Events</NavLink>
          <ul className={`${styles.dropdownMenu} ${eventsDropdown ? styles.show : ""}`}>
            <li>
              <NavLink 
                to="https://acs.dypvp.edu.in/all-events.aspx#" 
                onClick={closeAllDropdowns}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Gallery Link */}
        <li>
          <NavLink to="/gallary" onClick={closeAllDropdowns}>Gallery</NavLink>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;