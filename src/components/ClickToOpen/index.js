import './styles.scss'

const ClicktToOpen = () => {

  const text = 'Open Project · '
  
  const innerText = text.split('').map((letter, i) => 
    <span key={i} style={{transform: `rotate(${(i) * 25.5}deg)`}}>{letter}</span>
  )

  // console.log(innerText)

  return (
    <div className='circle'>
      {/* <div className='outer'></div> */}
      <div className='text'>
        <p>
          {innerText}
        </p>
      </div>
    </div>
  )
  
}

export default ClicktToOpen