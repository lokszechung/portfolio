import './styles.scss'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// import Django from '../../images/icons/django.svg'
// import Express from '../../images/icons/express.svg'
// import Git from '../../images/icons/git.svg'
// import GitHub from '../../images/icons/github.svg'
// import HTML from '../../images/icons/html.svg'
// import JavaScript from '../../images/icons/javascript.svg'
// import MongoDB from '../../images/icons/mongodb.svg'
// import Node from '../../images/icons/node.svg'
// import NPM from '../../images/icons/npm.svg'
// import PostgreSQL from '../../images/icons/postgresql.svg'
// import Python from '../../images/icons/python.svg'
// import react from '../../images/icons/react.svg'
// import Sass from '../../images/icons/sass.svg'

// const tech = [
//   'Django',
//   'Express',
//   'Git',
//   'GitHub',
//   'HTML',
//   'JavaScript',
//   'MongoDB',
//   'Node',
//   'NPM',
//   'Python',
//   'React',
//   'Sass'
// ]
// const getImageUrl = (i) => {
//   console.log(`../../images/icons/${i.toLowerCase()}.svg`)
//   return `../../images/icons/${i.toLowerCase()}.svg`
// }

const AboutView = () => {
  
  useEffect(() => {
    AOS.init()
  }, [])

  const [scrolled, setScrolled] = useState()
  
  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY)
  })


  return (
    <div className='about-view-container' id="about">
      <div className='about-line-one'>
        <h1 style={{ transform: `translateX(${-150+scrolled/80}%)`, transitionDuration: '0.25s' }}>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
        </h1>
      </div>
      <div className='about-line-two'>
        <h1 style={{ transform: `translateX(${-100-scrolled/100}%)`, transitionDuration: '0.25s' }}>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
        </h1>
      </div>

      <p className='about-text aos-init aos-animate' data-aos="fade-up" data-aos-easing='ease-in-sine' data-aos-offset="520">
        I am a <span>Software Developer</span> and a recent graduate of the Software Engineering Immersive programme at General Assembly.
      </p>
      {/* data-aos-offset="-510" */}


      <p className='about-text aos-init aos-animate' data-aos="fade-up" data-aos-easing='ease-in-sine' data-aos-offset="570">
        My aim is to find a Full Stack Developer role in a team that values <span>growth</span> and <span>integrity</span>. <br /> I am motivated by the opportunity to constantly learn and improve and create work that can have a <span>positive impact</span>.
      </p>
      {/* data-aos-offset="-745"  */}


      <p className='about-text aos-init aos-animate' data-aos="fade-up" data-aos-easing='ease-in-sine' data-aos-offset="515">
        When I'm not writing <span>clean code</span>, you'll probably find me playing football or watching football. <a href="https://twitter.com/search?q=coyg" target="_blank" rel="noreferrer"><span>#COYG</span></a>
      </p>
      {/* data-aos-offset="-1205" */}


      <p className='about-text aos-init aos-animate' data-aos="fade-up" data-aos-easing='ease-in-sine' data-aos-offset="550">
        I also trade in the stock market and forex market, and have dabbled in crypto <span className='oops'>&#x28;oops&#x29;</span>. Even though I've lost more than I've made, I really enjoy the process and journey.
      </p>
      {/* data-aos-offset="-1460" */}
    </div>
  )
}

export default AboutView    