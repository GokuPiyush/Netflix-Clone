import React, { useEffect, useState } from 'react';
import '../css/nav.css';

export default function Nav(){
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_content'>
        <img className='nav_logo' src='/images/logo.png' alt='' />
        <img className='nav_avatar' src='/images/avatar.png' alt='' />
      </div>
    </div>
  );
}