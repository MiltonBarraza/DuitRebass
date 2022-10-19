import React, {useState} from 'react';
//import {FaArrowCircleUp} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp} from '@fortawesome/free-solid-svg-icons';
import { Button } from './styles';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  let value 
if (typeof window !== 'undefined') {
  value = addEventListener('scroll', toggleVisible)
}
//global.addEventListener('scroll', toggleVisible);
  
  return (
    <Button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
     <FontAwesomeIcon icon={faSortUp} />
    </Button>
  );
}
  
export default ScrollButton;