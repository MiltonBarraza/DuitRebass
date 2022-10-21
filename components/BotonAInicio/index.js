import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './styles';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    });
  };

  let value
  if (typeof window !== 'undefined') {
    value = addEventListener('scroll', toggleVisible)
  }

  return (
    <Button onClick={scrollToTop} style={{ opacity: visible ? '1' : '0' }}>
      <FontAwesomeIcon icon={faAngleUp} />
    </Button>
  );
}

export default ScrollButton;