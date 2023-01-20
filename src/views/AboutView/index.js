import './styles.scss'
import { useState, useEffect } from 'react'

import Django from '../../images/icons/django.svg'
import Express from '../../images/icons/express.svg'
import Git from '../../images/icons/git.svg'
import GitHub from '../../images/icons/github.svg'
import HTML from '../../images/icons/html.svg'
import JavaScript from '../../images/icons/javascript.svg'
import MongoDB from '../../images/icons/mongodb.svg'
import Node from '../../images/icons/node.svg'
import NPM from '../../images/icons/npm.svg'
import PostgreSQL from '../../images/icons/postgresql.svg'
import Python from '../../images/icons/python.svg'
import react from '../../images/icons/react.svg'
import Sass from '../../images/icons/sass.svg'

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

  const [scrolled, setScrolled] = useState()

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

  const techStack = [
    {
      tech: 'JavaScript',
      url: JavaScript
    },
    {
      tech: 'React',
      url: react
    },
    {
      tech: 'Node',
      url: Node
    },
    {
      tech: 'Express',
      url: Express
    },
    {
      tech: 'Python',
      url: Python
    },
    {
      tech: 'Django',
      url: Django
    },
    {
      tech: 'MongoDB',
      url: MongoDB
    },
    {
      tech: 'PostgreSQL',
      url: PostgreSQL
    },
    {
      tech: 'HTML',
      url: HTML
    },
    {
      tech: 'Sass',
      url: Sass
    },
    {
      tech: 'Git',
      url: Git
    },
    {
      tech: 'GitHub',
      url: GitHub
    },
    {
      tech: 'NPM',
      url: NPM
    },
  ]
  
  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY)
  })


  return (
    <div className='about-view-container' id="about">
      <div className='about-line-one'>
        <h2 style={{ transform: `translateX(${-150+scrolled/80}%)`, transitionDuration: '0.95s' }}>
        {/* <h2 style={{ transform: `translateX(${-150+dy}px)`}}> */}
        {/* <h2 style={topStyle}> */}
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
        </h2>
      </div>
      <div className='about-line-two'>
        <h2 style={{ transform: `translateX(${-150-scrolled/100}%)`, transitionDuration: '0.95s' }}>
        {/* <h2 style={{ transform: `translateX(${-150-dy}px)`}}> */}
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
        </h2>
      </div>
      {/* <div className='about-line-one'>
        <h2 style={{ transform: `translateX(${-scrolled}px)` }}>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
          <span className="outline">ABOUT ME </span>
          <span>ABOUT ME </span>
        </h2>
      </div> */}
      <p className='about-text'></p>
      <p className='about-text'>I am a <span>Software Developer</span> and a recent graduate of the Software Engineeing Immersive programme at General Assembly.</p>
      <p className='about-text'>My aim is to find a Full Stack Developer role in a team that values <span>communication</span> and <span>collaboration</span>. <br /> I am motivated by the opportunity to improve and continuously learn and create work that can have a <span>positive impact</span> on people.</p>
      <p className='about-text'>When I'm not writing <span>clean code</span>, you'll probably find me playing football somewhere. Or watching football. <span>#COYG</span> <br />
      I'm also interested in trading in the stock market and forex market, and have dabbled in crypto &#x28;oops&#x29;. However, I've lost more than I've made, so I really do need a full-time job.</p>
      {/* <h3>Tech Stack</h3> */}
      {/* <div className='icons-container'>
        {techStack.map(i => (
          <div className='icon-box' key={i}>
            <img src={i.url} alt={i.tech} />
            <p>{i.tech}</p>
          </div>
        ))}        
      </div> */}
    </div>
  )
}

export default AboutView    