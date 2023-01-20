import './styles.scss'
import { useState, useEffect } from 'react'

import arrow from '../../images/arrow.gif'

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

const TitleView = () => {

  const [scrolled, setScrolled] = useState()

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
    <div className="title-view-container" id="title">
      {/* <h2>THIS WEBSITE IS UNDER CONSTRUCTION</h2> */}
      {/* <img src={arrow} alt='down arrow'/> */}
      <div className='line-container'>
        <div className='title-line-one'>
          <h1 style={{ transform: `translateX(${-scrolled/30}%)`, transitionDuration: '0.95s' }}>
            <span>LOK SZE CHUNG </span>
            <span className="outline">SOFTWARE DEVELOPER </span>
            <span>LOK SZE CHUNG </span>
          </h1>
        </div>
        <div className='title-line-two'>
          <h1 style={{ transform: `translateX(${-80+scrolled/50}%)`, transitionDuration: '0.95s' }}>
            <span>LOK SZE CHUNG </span>
            <span className="outline">SOFTWARE DEVELOPER </span>
            <span>LOK SZE CHUNG </span>
            <span className="outline">SOFTWARE DEVELOPER </span>
          </h1>
        </div>
      </div>
      <h3>Tech Stack</h3>
      <div className='icons-container'>
        {techStack.map(i => (
          <div className='icon-box' key={i}>
            <img src={i.url} alt={i.tech} />
            <p>{i.tech}</p>
          </div>
        ))}        
      </div>
    </div>
  )
  
}

export default TitleView    