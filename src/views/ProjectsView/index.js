import './styles.scss'
import { useState } from 'react'

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
import Python from '../../images/icons/python.svg'
import react from '../../images/icons/react.svg'
import Sass from '../../images/icons/sass.svg'
import CSS from '../../images/icons/css.svg'

const ProjectsView = () => {

  const [scrolled, setScrolled] = useState()

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY)
  })

  return (
    <div className='projects-view-container'>
      <div className='projects-line-one'>
        <h2 style={{ transform: `translateX(${-scrolled/30}%)`, transitionDuration: '0.95s' }}>
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
        </h2>
      </div>
      <div className='projects-line-two'>
        <h2 style={{ transform: `translateX(${-170+scrolled/40}%)`, transitionDuration: '0.95s' }}>
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
        </h2>
      </div>
      <div className='project-box'>
        <h3>Thrift</h3>
        <div className='detail-line'>
          <img src={clock} alt='timeframe' />
          <p>Timeframe: 1 week</p>
          <div className='empty'></div>
          <img src={solo} alt='solo' />
          <p>Team size: Solo project</p>
        </div>
        <div className='tech-line'>
          <p>Tech Stack:</p>
          <div className='icon-wrapper'>
            <img src={JavaScript} alt='JavaScript' />
            <span className='tooltipText'>JavaScript</span>
          </div>
          <div className='icon-wrapper'>
            <img src={react} alt='React' />
            <span className='tooltipText'>React</span>
          </div>
          <div className='icon-wrapper'>
            <img src={Python} alt='Python' />
            <span className='tooltipText'>Python</span>
          </div>
          <div className='icon-wrapper'>
            <img src={Django} alt='Django' />
            <span className='tooltipText'>Django</span>
          </div>
          <div className='icon-wrapper'>
            <img src={HTML} alt='HTML' />
            <span className='tooltipText'>HTML</span>
          </div>
          <div className='icon-wrapper'>
            <img src={Sass} alt='Sass' />
            <span className='tooltipText'>Sass</span>
          </div>
        </div>
        <div className='info'>
          <p>Using React for the frontend and Python and Django REST Framework to build the backend and serve a REST API, I created a full stack application for a marketplace website.</p>
        </div>
      </div>

      <div className='project-box'>
        <h3>Sprout Anywhere</h3>
        <div className='detail-line'>
          <img src={clock} alt='timeframe' />
          <p>Timeframe: 1.5 week</p>
          <div className='empty'></div>
          <img src={group} alt='group' />
          <p>Team size: 3</p>
        </div>
        <div className='tech-line'>
          <p>Tech Stack:</p>
          <div className='icon-wrapper'>
            <img src={JavaScript} alt='JavaScript' />
            <span className='tooltipText'>JavaScript</span>
          </div>
          <div className='icon-wrapper'>
            <img src={react} alt='React' />
            <span className='tooltipText'>React</span>
          </div>
          <div className='icon-wrapper'>
            <img src={Node} alt='Node' />
            <span className='tooltipText'>Node</span>
          </div>
          <div className='icon-wrapper'>
            <img src={Express} alt='Express' />
            <span className='tooltipText'>Express</span>
          </div>
          <div className='icon-wrapper'>
            <img src={MongoDB} alt='MongoDB' />
            <span className='tooltipText'>MongoDB</span>
          </div>
          <div className='icon-wrapper'>
            <img src={HTML} alt='HTML' />
            <span className='tooltipText'>HTML</span>
          </div>
          <div className='icon-wrapper'>
            <img src={Sass} alt='Sass' />
            <span className='tooltipText'>Sass</span>
          </div>
        </div>
        <div className='info'>
          <p>Using React for the frontend and MongoDB, Express and Node to build the backend and serve a REST API, we created a full stack MERN application for a houseplants blogging and e-commerce website. I contributed by building the home page, plant catalogue pages, and adding authentication into CRUD elements.</p>
        </div>
      </div>

      <div className='project-box'>
        <h3>Discover London</h3>
        <div className='detail-line'>
          <img src={clock} alt='timeframe' />
          <p>Timeframe: 1.5 days</p>
          <div className='empty'></div>
          <img src={pair} alt='pair' />
          <p>Team size: 2</p>
        </div>
        <div className='tech-line'>
          <p>Tech Stack:</p>
          <div className='icon-wrapper'>
            <img src={JavaScript} alt='JavaScript' />
            <span className='tooltipText'>JavaScript</span>
          </div>
          <div className='icon-wrapper'>
            <img src={react} alt='React' />
            <span className='tooltipText'>React</span>
          </div>
          <div className='icon-wrapper'>
            <img src={HTML} alt='HTML' />
            <span className='tooltipText'>HTML</span>
          </div>
          <div className='icon-wrapper'>
            <img src={Sass} alt='Sass' />
            <span className='tooltipText'>Sass</span>
          </div>
        </div>
        <div className='info'>
          <p>Built a React app, along with SCSS, Bootstrap and Express with Node which consumed a public API from Skiddle, displaying the results of events in London. I created the index page displaying events and built the category and date filter.</p>
        </div>
      </div>

      <div className='project-box'>
        <h3>Minesweeper</h3>
        <div className='detail-line'>
          <img src={clock} alt='timeframe' />
          <p>Timeframe: 1 week</p>
          <div className='empty'></div>
          <img src={solo} alt='solo' />
          <p>Team size: Solo project</p>
        </div>
        <div className='tech-line'>
          <p>Tech Stack:</p>
          <div className='icon-wrapper'>
            <img src={JavaScript} alt='JavaScript' />
            <span className='tooltipText'>JavaScript</span>
          </div>
          <div className='icon-wrapper'>
            <img src={HTML} alt='HTML' />
            <span className='tooltipText'>HTML</span>
          </div>
          <div className='icon-wrapper'>
            <img src={CSS} alt='CSS' />
            <span className='tooltipText'>CSS</span>
          </div>
        </div>
        <div className='info'>
          <p>Built a grid-based game using JavaScript, HTML and CSS. I chose a challenging game to replicate, cementing my fundamental logical JavaScript skills.</p>
        </div>
      </div>

    </div>
  )  
}

export default ProjectsView    