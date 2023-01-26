import './styles.scss'

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

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
          <ul>
            <li className='navlink' onClick={handleClickAbout}>
              <a href="#about">About</a> 
            </li>
            <li className='navlink' onClick={handleClickProject}>
              <a href="#projects" >Projects</a> 
            </li>
            <li className='navlink' onClick={handleClickContact}>
              <a href="#contact" >Contact</a>
            </li>
          </ul>
        </nav>
    </header>
  )
  
}

export default Navbar  