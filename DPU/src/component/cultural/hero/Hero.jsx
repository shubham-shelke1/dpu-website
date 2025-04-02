import React from 'react'
import styles from "./Hero.module.css"
import { Link } from 'react-router-dom'


function Hero() {
  return (
<>

<div className={styles.ne}>
<img src='https://i.pinimg.com/474x/49/e3/38/49e338211097c601c54ee5a2163ae703.jpg'/>      <Link to="/">Go Back Home</Link>
      </div>
</>  )
}

export default Hero