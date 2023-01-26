import './styles.scss'
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

import TitleView from './views/TitleView'
import AboutView from './views/AboutView'
import ProjectsView from './views/ProjectsView'
import ContactView from './views/ContactView'
import Navbar from './components/Navbar'

import SmoothScroll from './components/SmoothScroll'
// import moon from './images/moon.png'
import halfmoon from './images/halfmoon.png'

const App = () => {



  const moonRef = useRef(null)
  const counterRef = useRef(null)
  const [counter, setCounter] = useState(0)

  const body = document.body
  const main = document.getElementById('root')

  window.addEventListener('load', startScroll)

  let count 

  function startScroll() {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth'})

    let counters = 0

    count = setInterval(() => {
      counters = counterFunction()
    }, 25)

    function counterFunction() {
      if (counters < 100) {
        counters = counters + 1
        setCounter(counters)
        return counters
      }
      else{
        clearInterval(count)
        setCounter(100)
        return 100
      }
    }

    setTimeout(() => {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth'})
    }, 2000)
    setTimeout(() => {
      moonRef.current.style=`transition: 3.5s; transform: translateY(-300vh);`
    }, 4000)
    setTimeout(() => {
      counterRef.current.style='display: none;'
    }, 4100)
  }

  const loading = 
  <div className='black' ref={moonRef}>
    <img className='moon' src={halfmoon} alt='moon'/>
    <div className='counter' ref={counterRef}>
      <p className='number'>{counter}</p>
      <p className='percent'>PERCENT</p>
    </div>
  </div>

  // We define variables we will need later. 
  // 2 variables to store the scroll position and 2 variables to store the 
  // // container position.
  // let sx = 0
  // let sy = 0

  // let dx = sx
  // let dy = sy

  // // The trick is to set a height to the body to keep the browser scroll bar.
  // body.style.height = main.clientHeight + 'px'

  // // Then we fix our container so it won't move when the user scrolls.
  // // We will move it ourself with the Linear Interpolation and translations.
  // // main.style.position = 'fixed'
  // // main.style.top = 0
  // // main.style.left = 0

  // // We bind a scroll event to the window to watch scroll position.
  // window.addEventListener('scroll', scroll)

  // function scroll() {
  //   // We only update the scroll position variables
  //   sx = window.pageXOffset
  //   sy = window.pageYOffset
  // }

  // // Then we start a `requestAnimationFrame` loop. 

  // window.requestAnimationFrame(render)

  // function render() {
  //   // We calculate our container position by using our Linear Interpolation method.
    
  //   // dx = lerp(dx, sx, 0.08)
  //   dy = lerp(dy, sy, 0.08)
    
  //   // dx = Math.floor(dx * 100) / 100
  //   dy = Math.floor(dy * 100) / 100
  //   // setYValue(dy)
  //   // Finally we translate our container to its new positions.
  //   // Don't forget to add a minus sign because the container needs to move in 
  //   // the opposite direction of the window scroll.
  //   main.style.transform = `translate(-${dx}px, -${dy}px)`
    
  //   // And we loop again.
  //   window.requestAnimationFrame(render)
  // }

  // // This is our Linear Interpolation method.
  // function lerp(a, b, n) {
  //   return (1 - n) * a + n * b
  // }

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <main>
          {loading}
          <TitleView />
          <AboutView />
          <ProjectsView />
          <ContactView />
          {/* </div> */}
        </main>
      </BrowserRouter>
    </>
  )
}

export default App