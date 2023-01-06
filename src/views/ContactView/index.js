import './styles.scss'

import GitHub from '../../images/icons/github.svg'
import LinkedIn from '../../images/icons/linkedin.svg'
import Email from '../../images/icons/email.png'

const ContactView = () => {
  return (
    <div className="contact-view-container">
      <h2>CONTACT ME</h2>
      <h2 className="outline">CONTACT ME</h2>
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