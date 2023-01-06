import './styles.scss'

import TitleView from './views/TitleView'
import AboutView from './views/AboutView'
import ProjectsView from './views/ProjectsView'
import ContactView from './views/ContactView'

const App = () => {
  return (
    <>
      <TitleView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </>
  )
}

export default App