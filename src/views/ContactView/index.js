import './styles.scss'
import { useState } from 'react'

import GitHub from '../../images/icons/github.svg'
import LinkedIn from '../../images/icons/linkedin.svg'
import Email from '../../images/icons/email.png'

const ContactView = () => {

  const [scrolled, setScrolled] = useState()

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY)
  })

  return (
    <div className="contact-view-container">
      <div className='contact-line-one'>
        <h2 style={{ transform: `translateX(${-150+scrolled/60}%)`, transitionDuration: '0.95s' }}>
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
        </h2>
      </div>
      <div className='contact-line-two'>
        <h2 style={{ transform: `translateX(${-150-scrolled/80}%)`, transitionDuration: '0.95s' }}>
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
        </h2>
      </div>
      <p className='find'>Find me on the following:</p>
      <div className='contact-line'>
        <img src={GitHub} alt='Github' />
        <a href="https://github.com/lokszechung">github.com/lokszechung</a>
      </div>
      <div className='contact-line'>
        <img src={LinkedIn} alt='LinkedIn' />
        <a href="https://www.linkedin.com/in/lokszechung/">linkedin.com/in/lokszechung</a>
      </div>
      <div className='contact-line'>
        <img src={Email} alt='Email' />
        <p>lschung@hotmail.co.uk</p>
      </div>
    </div>
  )
  
}

export default ContactView    