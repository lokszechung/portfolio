import './styles.scss'
import logo from '../../images/logo-no-bg.png'

function handleClickAbout() {
  setTimeout(() => {
    window.scrollBy(0, 160)
  }, 1500)
}

function handleClickProject() {
  setTimeout(() => {
    window.scrollBy(0, 350)
  }, 1500)
}

function handleClickContact() {
  setTimeout(() => {
    window.scrollBy(0, 275)
  }, 1500)
}

function handleClickHome() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth'})
}

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
          <img src={logo} alt='LS logo' onClick={handleClickHome} />
          <ul>
            <li className='navlink'>
              <a href="#about">About</a> 
            </li>
            <li className='navlink'>
              <a href="#projects" >Projects</a> 
            </li>
            <li className='navlink'>
              <a href="#contact" >Contact</a>
            </li>
          </ul>
        </nav>
    </header>
  )
  
}

export default Navbar  