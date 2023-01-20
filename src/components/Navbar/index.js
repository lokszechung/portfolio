import './styles.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
          <ul>
            <li className='navlink'>
              {/* <Link activeClass="active" smooth spy to="#about">About</Link> */}
              <a href="#about">About</a> 
            </li>
            <li className='navlink'>
              {/* <Link activeClass="active" smooth spy to="#projects">Projects</Link> */}
              <a href="#projects">Projects</a> 
            </li>
            <li className='navlink'>
              {/* <Link activeClass="active" smooth spy to="#contact">Contact</Link> */}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
    </header>
  )
  
}

export default Navbar  