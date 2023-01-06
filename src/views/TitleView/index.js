import './styles.scss'

import arrow from '../../images/arrow.gif'

const TitleView = () => {
  return (
    <div className="title-view-container">
      <h1>LOK SZE CHUNG</h1>
      <h1 className="outline">SOFTWARE DEVELOPER</h1>
      <h2>THIS WEBSITE IS UNDER CONSTRUCTION</h2>
      <img src={arrow} alt='down arrow'/>
    </div>
  )
  
}

export default TitleView    