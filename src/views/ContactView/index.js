import './styles.scss'
import { useState, useEffect } from 'react'

import GitHub from '../../images/icons/github.svg'
import LinkedIn from '../../images/icons/linkedin.svg'
import Email from '../../images/icons/email.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactView = () => {

  const [scrolled, setScrolled] = useState()

  useEffect(() => {
    AOS.init()
  }, [])

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY)
  })

  return (
    <div className="contact-view-container" id="contact">
      <div className='contact-line-one'>
        <h1 style={{ transform: `translateX(${-150+scrolled/60}%)`, transitionDuration: '0.95s' }}>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
        </h1>
      </div>
      <div className='contact-line-two'>
        <h1 style={{ transform: `translateX(${-100-scrolled/80}%)`, transitionDuration: '0.95s' }}>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
          <span className="outline">CONTACT ME </span>
          <span>CONTACT ME </span>
        </h1>
      </div>
      <p className='find aos-init aos-animate' data-aos="fade-up" data-aos-offset="-5065" data-aos-easing='ease-in-sine'>Find me on the following:</p>
      <div className='contact-line aos-init aos-animate' data-aos="fade-up" data-aos-offset="-5165" data-aos-easing='ease-in-sine'>
        <img src={GitHub} alt='Github' />
        <a href="https://github.com/lokszechung" target="_blank" rel="noreferrer">github.com/lokszechung</a>
      </div>
      <div className='contact-line aos-init aos-animate' data-aos="fade-up" data-aos-offset="-5230" data-aos-easing='ease-in-sine' data-aos-delay='250'>
        <img src={LinkedIn} alt='LinkedIn' />
        <a href="https://www.linkedin.com/in/lokszechung/" target="_blank" rel="noreferrer">linkedin.com/in/lokszechung</a>
      </div>
      <div className='contact-line aos-init aos-animate' data-aos="fade-up" data-aos-offset="-5295" data-aos-easing='ease-in-sine' data-aos-delay='500'>
        <img src={Email} alt='Email' />
        <p>lschung@hotmail.co.uk</p>
      </div>
      <footer>
        <p>Copyright © 2023 Lok Sze Chung. All Rights Reserved.</p>
      </footer>
    </div>
  )
  
}

export default ContactView    