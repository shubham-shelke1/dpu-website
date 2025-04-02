import React from 'react'
import Hero from '../component/home/hero/Hero'
import Card from '../component/home/card/Card'
import Welcome from '../component/welcome/Welcome'
import About from '../component/about/About'
import Text from '../component/testmonial/Text'
import Ourblog from '../component/ourBlog/Ourblog'
import Recruiters from '../component/recruiter/Recruiters'
import Contact from '../component/contact/Contact'
import Associatepa from '../component/associtae/Associatepa'
import Form from '../component/form/Form'

function HomePages() {
  return (
<>
<Hero />
<Card />
<Welcome/>
<About/>
<Text/>
<Ourblog />
  <Recruiters/>
  <Contact/>
  <Associatepa/>
  {/* <Form/> */}
  

  </>
    )
}

export default HomePages