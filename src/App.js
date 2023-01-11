import './styles.scss'
import { useState } from 'react'

import TitleView from './views/TitleView'
import AboutView from './views/AboutView'
import ProjectsView from './views/ProjectsView'
import ContactView from './views/ContactView'

import SmoothScroll from './components/SmoothScroll'

const App = () => {

  // const [scrolled, setScrolled] = useState()

  // window.addEventListener('scroll', () => {
  //   setScrolled(window.scrollY)
  // })

  return (
    <>
      <SmoothScroll />
      <div id="luxy">
        <TitleView />
        <AboutView />
        <ProjectsView />
        <ContactView />
      </div>
    </>
  )
}

export default App