import React, { useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const Button = () => {

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
      });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
<button className='top-to-btm'>
<ArrowUpCircleIcon onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
</button>
        
    );
};

export default Button;