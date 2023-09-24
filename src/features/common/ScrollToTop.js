import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {

  useEffect(() => {
    // Scroll to the top of the page when the pathname changes
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return null; // This component doesn't render anything
}

export default ScrollToTop;