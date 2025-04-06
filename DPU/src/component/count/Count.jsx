import React, { useState, useEffect } from "react";
import styles from "./Count.module.css";

function Count() {
  const [visitedStudents, setVisitedStudents] = useState(0);
  const [presentStudents, setPresentStudents] = useState(0);
  const [allStudents, setAllStudents] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitedStudents(prev => (prev < 500 ? prev + 100 : 500));
      setPresentStudents(prev => (prev < 500 ? prev + 10 : 500));
      setAllStudents(prev => (prev < 200 ? prev + 20 : 200));
    }, 100); // Faster counting with smaller interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.counterContainer}>
      <div className={styles.counterBox}>
        <p className={styles.label}>👨‍🎓 Visited Students</p>
        <span className={styles.counter}>
          {visitedStudents.toLocaleString()}+
        </span>
      </div>
      <div className={styles.counterBox}>
        <p className={styles.label}>🏫 Present Students</p>
        <span className={styles.counter}>
          {presentStudents.toLocaleString()}+
        </span>
      </div>
      <div className={styles.counterBox}>
        <p className={styles.label}>📊 All Students</p>
        <span className={styles.counter}>
          {allStudents.toLocaleString()}+
        </span>
      </div>
    </div>
  );
}

export default Count;