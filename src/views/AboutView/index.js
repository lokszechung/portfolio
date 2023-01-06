import './styles.scss'

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
  return (
    <div className='about-view-container'>
      <h2>ABOUT ME</h2>
      <h2 className='outline'>ABOUT ME</h2>
      <p>Prior to joining the General Assembly bootcamp, I was working in the finance and social care industry. I felt that I was stagnating in my learning and development in that role, so I took the first step in finding a career that challenges me to problem solve and tap into my enthusiasm for logical thinking and creativity.</p>
      <p>I am seeking a Full Stack Developer role in a team that values communication and collaboration. I am motivated by the opportunity to improve myself and those around me, and create work that can have a positive impact on users.</p>
      <h3>Tech Stack</h3>
      <div className='icons-container'>
        {/* {tech.map(i => (
          <div className='icon-box' key={i}>
            <div className='icon'><img src={i.toLowerCase()} alt={i} /></div>
            <p>{i}</p>
          </div>
        ))} */}
        <div className='icon-box'>
          <img src={JavaScript} alt='JavaScript' />
          <p>JavaScript</p>
        </div>

        <div className='icon-box'>
          <img src={react} alt='React' />
          <p>React</p>
        </div>

        <div className='icon-box'>
          <img src={Node} alt='Node' />
          <p>Node</p>
        </div> 

        <div className='icon-box'>
          <img src={Express} alt='Express' />
          <p>Express</p>
        </div>

        <div className='icon-box'>
          <img src={Python} alt='Python' />
          <p>Python</p>
        </div>  

        <div className='icon-box'>
          <img src={Django} alt='Django' />
          <p>Django</p>
        </div>

        <div className='icon-box'>
          <img src={MongoDB} alt='MongoDB' />
          <p>MongoDB</p>
        </div>

        <div className='icon-box'>
          <img src={HTML} alt='HTML' />
          <p>HTML</p>
        </div>

        <div className='icon-box'>
          <img src={Sass} alt='Sass' />
          <p>Sass</p>
        </div> 

        <div className='icon-box'>
          <img src={NPM} alt='NPM' />
          <p>NPM</p>
        </div> 

        <div className='icon-box'>
          <img src={Git} alt='Git' />
          <p>Git</p>
        </div> 

        <div className='icon-box'>
          <img src={GitHub} alt='GitHub' />
          <p>GitHub</p>
        </div> 
        
      </div>
    </div>
  )
}

export default AboutView    