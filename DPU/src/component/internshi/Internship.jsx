import React from "react";
import "./Internship.css";

function Internship() {
  return (
    <div className="container">
      <div className="header">
        <h1>Internship</h1>
         <p> You are here &gt;&gt; Academics &gt;&gt; Courses &gt;&gt; Internship</p>
      </div>

      <div className="section-title">
        <h2>T.Y.B.Sc Biotechnology</h2>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name of the Student</th>
              <th>Name of Institute/ Organization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Yogesh Bandu Shinde</td>
              <td>Swami Samarth Clinical Lab, Dharur</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sumit Sayaji More</td>
              <td>Swami Samarth Clinical Lab, Dharur</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kirtana Reji</td>
              <td>Rapture Biotech, Mumbai</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Simran Rai</td>
              <td>Karakinos Health Care, Mumbai</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Kishore Sanjayan</td>
              <td>CSIR-CFTRI, Mysore</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Internship;
