import './styles.scss'
import { useState, useEffect } from 'react'



import arrow from '../../images/arrow.gif'

const TitleView = () => {

  const [scrolled, setScrolled] = useState()

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY)
  })

  useEffect(() => {
    console.log(scrolled)
  }, [scrolled])

  return (
    <div className="title-view-container">
      <h2>THIS WEBSITE IS UNDER CONSTRUCTION</h2>
      <img src={arrow} alt='down arrow'/>
      <div className='title-line-one'>
        <h1 style={{ transform: `translateX(${-scrolled/30}%)`, transitionDuration: '0.95s' }}>
        {/* <h1 className='luxy-el' data-horizontal="1" data-speed-x="-50"> */}
          <span>LOK SZE CHUNG </span>
          <span className="outline">SOFTWARE DEVELOPER </span>
          <span>LOK SZE CHUNG </span>
        </h1>
      </div>
      <div className='title-line-two'>
        <h1 style={{ transform: `translateX(${-80+scrolled/40}%)`, transitionDuration: '0.95s' }}>
        {/* <h1 className='luxy-el' data-horizontal="1" data-speed-x="50"> */}
          <span>LOK SZE CHUNG </span>
          <span className="outline">SOFTWARE DEVELOPER </span>
          <span>LOK SZE CHUNG </span>
          <span className="outline">SOFTWARE DEVELOPER </span>
        </h1>
      </div>
    </div>
  )
  
}

export default TitleView    