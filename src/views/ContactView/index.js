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
        <h2 style={{ transform: `translateX(${-150+scrolled/30}%)`, transitionDuration: '0.95s' }}>
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
        <h2 style={{ transform: `translateX(${-150-scrolled/40}%)`, transitionDuration: '0.95s' }}>
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
        <p>github.com/lokszechung</p>
      </div>
      <div className='contact-line'>
        <img src={LinkedIn} alt='LinkedIn' />
        <p>linkedin.com/in/lokszechung</p>
      </div>
      <div className='contact-line'>
        <img src={Email} alt='Email' />
        <p>lschung@hotmail.co.uk</p>
      </div>
    </div>
  )
  
}

export default ContactView    