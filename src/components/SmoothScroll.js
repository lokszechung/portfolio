import { useEffect } from "react";
// import Scrollbar from 'smooth-scrollbar';
import luxy from 'luxy.js'

const SmoothScroll = () => {

  // const options = {
  //   damping: 0.05,
  // }

  const options = {
    wrapper: '#luxy',
    targets: '.luxy-el',
    wrapperSpeed: 0.08,
  }

  useEffect(() => {
    // Scrollbar.init(document.body, options)
    luxy.init(document.body, options);
  })

}

export default SmoothScroll