import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <button onClick={() => toggleDropdown("ranking")} className="nav-button">
            Ranking ▼
          </button>
          {openDropdown === "ranking" && (
            <ul className="dropdown">
              <li>NIRF</li>
              <li>ARIIA</li>
              <ul className="sub-dropdown">
                <li>NIRF 2017-18</li>
                <li>NIRF 2018-2019</li>
                <li>NIRF 2019-2020</li>
                <li>NIRF 2021-22</li>
                <li>NIRF 2023</li>
                <li>NIRF 2024</li>
                <li>NIRF 2025</li>
              </ul>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
