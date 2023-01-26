import './styles.scss'
import { useRef } from 'react'

import thrift1 from '../../images/projects/thrift-1.png'
import thrift2 from '../../images/projects/thrift-2.png'
import thrift3 from '../../images/projects/thrift-3.png'
import thrift5 from '../../images/projects/thrift-5.png'


const Slideshow = () => {

  const thriftImages = [
    {
      image: 'Thrift Landing Page',
      url: thrift1
    },
    {
      image: 'Thrift Index Page',
      url: thrift2
    },
    {
      image: 'Thrift Single Page',
      url: thrift3
    },
    {
      image: 'Thrift Profile Page',
      url: thrift5
    }
    
  ]

  const mySlidesRef = useRef(null)

  // let slideIndex = 0;
  // showSlides();

  // function showSlides() {
  //   let i;
  //   let slides = mySlides
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}
  //   slides[slideIndex-1].style.display = "block";
  //   setTimeout(showSlides, 2000); // Change image every 2 seconds
  // }
  console.log('mySlides --> ' + mySlidesRef[0])

  return (
    <div class="slideshow-container">
      {thriftImages.map(i => {
        return (
          <div className="mySlides fade" key={i.name} ref={mySlidesRef}>
            {/* <div class="numbertext">1 / 3</div> */}
            <img src={i.url} alt={i.name} style={{width:'100%'}} />
          {/* <div class="text">Caption Text</div> */}
      </div>
        )
        })}
      

    </div>
  )
  
}

export default Slideshow


    // {/* <!-- The dots/circles -->
    // <div style="text-align:center">
    //   <span class="dot" onclick="currentSlide(1)"></span>
    //   <span class="dot" onclick="currentSlide(2)"></span>
    //   <span class="dot" onclick="currentSlide(3)"></span>
    // </div> */}
      //     {/* <!-- Next and previous buttons -->
      // <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      // <a class="next" onclick="plusSlides(1)">&#10095;</a> */}