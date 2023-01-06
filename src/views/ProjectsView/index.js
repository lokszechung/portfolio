import './styles.scss'

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

const ProjectsView = () => {
  return (
    <div className='projects-view-container'>
      <h2>MY PROJECTS</h2>
      <h2 className='outline'>MY PROJECTS</h2>
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
          <img src={JavaScript} alt='JavaScript' />
          <img src={react} alt='React' />
          <img src={Python} alt='Python' />
          <img src={Django} alt='Django' />
          <img src={HTML} alt='HTML' />
          <img src={Sass} alt='Sass' />
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
          <img src={JavaScript} alt='JavaScript' />
          <img src={react} alt='React' />
          <img src={Node} alt='Node' />
          <img src={Express} alt='Express' />
          <img src={MongoDB} alt='MongoDB' />
          <img src={HTML} alt='HTML' />
          <img src={Sass} alt='Sass' />
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
          <img src={JavaScript} alt='JavaScript' />
          <img src={react} alt='React' />
          <img src={HTML} alt='HTML' />
          <img src={Sass} alt='Sass' />
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
          <img src={JavaScript} alt='JavaScript' />
          <img src={HTML} alt='HTML' />
          <img src={Sass} alt='Sass' />
        </div>
        <div className='info'>
          <p>Built a grid-based game using JavaScript, HTML and CSS. I chose a challenging game to replicate, cementing my fundamental logical JavaScript skills.</p>
        </div>
      </div>

    </div>
  )  
}

export default ProjectsView    