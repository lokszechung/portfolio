import './styles.scss'
import { useState, useEffect } from 'react'

import clock from '../../images/icons/clock.png'
import solo from '../../images/icons/solo.png'
import pair from '../../images/icons/pair.png'
import group from '../../images/icons/group.png'

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
import Yarn from '../../images/icons/yarn.svg'
import CSS from '../../images/icons/css.svg'
import Heroku from '../../images/icons/heroku.svg'

import minesweeper1 from '../../images/projects/minesweeper-1.png'
import discover1 from '../../images/projects/discover-london-2.png'
import sprout1 from '../../images/projects/sprout-anywhere-1.png'
import thrift1 from '../../images/projects/thrift-1.png'

import openProject from '../../images/explore-project-nobg.png'
import openRepo from '../../images/repository-nobg.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Slideshow from '../../components/Slideshow'

const ProjectsView = () => {

  const [scrolled, setScrolled] = useState()

  // const carousel = useRef()
  // const noOfImgs = 4;
  // const [currentImgIndex, setCurrentImgIndex] = useState(1)

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
      tech: 'CSS',
      url: CSS
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
    {
      tech: 'Yarn',
      url: Yarn
    },
    {
      tech: 'Heroku',
      url: Heroku
    },
  ]

  const thriftTech = ['JavaScript', 'React', 'Python', 'Django', 'PostgreSQL', 'HTML', 'Sass']
  const sproutTech = ['JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'HTML', 'Sass']
  const discoverTech = ['JavaScript', 'React', 'HTML', 'Sass']
  const minesweeperTech = ['JavaScript', 'React', 'CSS']

  useEffect(() => {
    AOS.init()
  }, [])

  window.addEventListener('scroll', () => {
      setScrolled(window.scrollY)
    })
  return (
    <div className='projects-view-container' id="projects">
      <div className='projects-line-one'>
        <h1 style={{ transform: `translateX(${-scrolled/60}%)`, transitionDuration: '0.25s' }}>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
        </h1>
      </div>
      <div className='projects-line-two'>
        <h1 style={{ transform: `translateX(${-180+scrolled/80}%)`, transitionDuration: '0.25s' }}>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
          <span className="outline">MY PROJECTS </span>
          <span>MY PROJECTS </span>
        </h1>
      </div>
      

      <div className='project-box'>
        <div className="project-title">
          <h3 className="aos-init aos-animate" data-aos="fade-right" data-aos-offset="500">Thrift</h3>
          <div className='project-clickables'>
            <div className='buttons aos-init aos-animate' data-aos="fade-left" data-aos-offset="530" data-aos-delay='250'>
              <a target='_blank' rel='noreferrer' href='https://thrift-project.herokuapp.com/'><img className='open-project' src={openProject} alt="open project"/></a>
              <a target='_blank' rel='noreferrer' href='https://github.com/lokszechung/thrift-project'><img className='open-repo' src={openRepo} alt="open repo"/></a>
            </div>
          </div>
        </div>
        <img className='thumbnail aos-init aos-animate' data-aos="fade-up" data-aos-offset="410" src={thrift1} alt="thrift"/>
        {/* <div className='thumbnail aos-init aos-animate' data-aos="fade-up" data-aos-offset="410">
          <Slideshow />
        </div> */}
        <div className='project-info aos-init aos-animate' data-aos="fade-down"  data-aos-offset="160">
          <div className='project-left'>
            <div className='detail-line-days'>
              <img src={clock} alt='timeframe' />
              <p>7 days</p>
            </div>
            <div className='detail-line-team'>
              <img src={solo} alt='solo' />
              <p>Solo project</p>
            </div>
            <p className='tech-used'>Technologies used:</p>
            <div className='tech-line'>
              {thriftTech.map(i => {
                const techIndex = techStack.findIndex(t => t.tech === i)
                return (
                  <div className='icon-wrapper' key={techStack[techIndex].tech}>
                    <img src={techStack[techIndex].url} alt={techStack[techIndex].tech} />
                    <span className='tooltipText'>{techStack[techIndex].tech}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='project-right'>
            <div className='info'>
              <p>Inspired while browsing Facebook Marketplace one night, I created a full stack application for a marketplace website using React for the frontend and Python and Django REST Framework to build the backend and serve a REST API.</p>
              <p>This app enables users to list their own items to sell, or simply browse the app to see what others are selling.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='project-box'>
        <div className="project-title">
          <h3 className="aos-init aos-animate" data-aos="fade-right" data-aos-offset="500">Sprout Anywhere</h3>
          <div className='project-clickables'>
            <div className='buttons aos-init aos-animate' data-aos="fade-left" data-aos-offset="530" data-aos-delay='250'>
              <a target='_blank' rel='noreferrer' href='https://sprout-anywhere.herokuapp.com/'><img className='open-project' src={openProject} alt="open project"/></a>
              <a target='_blank' rel='noreferrer' href='https://github.com/lokszechung/sprout-anywhere'><img className='open-repo' src={openRepo} alt="open repo"/></a>
            </div>
          </div>
        </div>
        <img className='thumbnail aos-init aos-animate' data-aos="fade-up" data-aos-offset="410" src={sprout1} alt="sprout"/>
        <div className='project-info aos-init aos-animate' data-aos="fade-down"  data-aos-offset="160">
          <div className='project-left'>
            <div className='detail-line-days'>
              <img src={clock} alt='timeframe' />
              <p>8 days</p>
            </div>
            <div className='detail-line-team'>
              <img src={solo} alt='solo' />
              <p>Team of 3</p>
            </div>
            <p className='tech-used'>Technologies used:</p>
            <div className='tech-line'>
              {sproutTech.map(i => {
                const techIndex = techStack.findIndex(t => t.tech === i)
                return (
                  <div className='icon-wrapper' key={techStack[techIndex].tech}>
                    <img src={techStack[techIndex].url} alt={techStack[techIndex].tech} />
                    <span className='tooltipText'>{techStack[techIndex].tech}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='project-right'>
            <div className='info'>
              <p>Using React for the frontend and MongoDB, Express and Node to build the backend and serve a REST API, we created a full stack MERN application for a houseplants blogging and e-commerce website.</p>
              <p>This was a group project where my contributions were building the landing page, plant catalogue pages, and adding authentication into CRUD elements.</p>
              <p>Users of the app can buy or read blogs about plants. Create an account to start posting your own!</p>
            </div>
          </div>
        </div>
      </div>

      <div className='project-box'>
        <div className="project-title">
          <h3 className="aos-init aos-animate" data-aos="fade-right" data-aos-offset="500">Discover London</h3>
          <div className='project-clickables'>
            <div className='buttons aos-init aos-animate' data-aos="fade-left" data-aos-offset="530" data-aos-delay='250'>
              <a target='_blank' rel='noreferrer' href='https://discover-london-events.netlify.app/'><img className='open-project' src={openProject} alt="open project"/></a>
              <a target='_blank' rel='noreferrer' href='https://github.com/lokszechung/LondonEvents'><img className='open-repo' src={openRepo} alt="open repo"/></a>
            </div>
          </div>
        </div>
        <img className='thumbnail aos-init aos-animate' data-aos="fade-up" data-aos-offset="410" src={discover1} alt="discover"/>
        <div className='project-info aos-init aos-animate' data-aos="fade-down"  data-aos-offset="160">
          <div className='project-left'>
            <div className='detail-line-days'>
              <img src={clock} alt='timeframe' />
              <p>1.5 days</p>
            </div>
            <div className='detail-line-team'>
              <img src={solo} alt='solo' />
              <p>Team of 2</p>
            </div>
            <p className='tech-used'>Technologies used:</p>
            <div className='tech-line'>
              {discoverTech.map(i => {
                const techIndex = techStack.findIndex(t => t.tech === i)
                return (
                  <div className='icon-wrapper' key={techStack[techIndex].tech}>
                    <img src={techStack[techIndex].url} alt={techStack[techIndex].tech} />
                    <span className='tooltipText'>{techStack[techIndex].tech}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='project-right'>
            <div className='info'>
              <p>I built a React app, accompanied by SCSS and Bootstrap for the front end, and Express with Node which consumed a public API from Skiddle, displaying the results of events in London.</p>
              <p>This was a pair coded mini-hackathon, where I created the index page displaying events and built the category and date filter.</p>
              <p>Try the app and find events around London, or use the 'I'm Geeling Lucky' button to have a random event suggested to you.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='project-box'>
        <div className="project-title">
          <h3 className="aos-init aos-animate" data-aos="fade-right" data-aos-offset="500">Minesweeper</h3>
          <div className='project-clickables'>
            <div className='buttons aos-init aos-animate' data-aos="fade-left" data-aos-offset="530" data-aos-delay='250'>
              <a target='_blank' rel='noreferrer' href='https://lokszechung.github.io/project-minesweeper/'><img className='open-project' src={openProject} alt="open project"/></a>
              <a target='_blank' rel='noreferrer' href='https://github.com/lokszechung/project-minesweeper'><img className='open-repo' src={openRepo} alt="open repo"/></a>
            </div>
          </div>
        </div>
        <img className='thumbnail aos-init aos-animate' data-aos="fade-up" data-aos-offset="410" src={minesweeper1} alt="minesweeper"/>
        <div className='project-info aos-init aos-animate' data-aos="fade-down"  data-aos-offset="160">
          <div className='project-left'>
            <div className='detail-line-days'>
              <img src={clock} alt='timeframe' />
              <p>7 days</p>
            </div>
            <div className='detail-line-team'>
              <img src={solo} alt='solo' />
              <p>Solo Project</p>
            </div>
            <p className='tech-used'>Technologies used:</p>
            <div className='tech-line'>
              {minesweeperTech.map(i => {
                const techIndex = techStack.findIndex(t => t.tech === i)
                return (
                  <div className='icon-wrapper' key={techStack[techIndex].tech}>
                    <img src={techStack[techIndex].url} alt={techStack[techIndex].tech} />
                    <span className='tooltipText'>{techStack[techIndex].tech}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='project-right'>
            <div className='info'>
              <p>I built a grid-based game using JavaScript, HTML and CSS. I chose a challenging game to replicate, cementing my fundamental logical JavaScript skills.</p>
              <p>I kept to a lot of the original, nostalgic design. Have a go at beating the game! There are three difficulty levels to choose from, or set your own custom board.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )  
}

export default ProjectsView  

// Thrift
// data-aos-offset="-2110"
// data-aos-offset="-2080"
// data-aos-offset="-2200"
// data-aos-offset="-2690"

// Sprout 
// data-aos-offset="-2800"
// data-aos-offset="-2770"
// data-aos-offset="-2890"
// data-aos-offset="-3340"

// Discover
// data-aos-offset="-3495"
// data-aos-offset="-3465"
// data-aos-offset="-3585"
// data-aos-offset="-4025"

// Minesweeper
// data-aos-offset="-4150"
// data-aos-offset="-4120"
// data-aos-offset="-4235"
// data-aos-offset="-4600"
