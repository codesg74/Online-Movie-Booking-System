import React from 'react';
import googleLogo from './img/gpp.jpg';
import facebookLogo from './img/fb.jpg';
import instagramLogo from './img/ins.jpg';
import twitterLogo from './img/twi.png';

function Footer() {
  return (
    <>
      <div style={{width: '100%', height: '50px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', boxSizing: 'border-box'}}>
        <p style={{color: 'white', margin: 0}}>MovieVibe.com</p>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={googleLogo} alt="Google" style={{height: '23px', margin: '0 10px'}} />
          <img src={facebookLogo} alt="Facebook" style={{height: '37px', margin: '0 0px'}} />
          <img src={instagramLogo} alt="Instagram" style={{height: '50px', margin: '0 0px'}} />
          <img src={twitterLogo} alt="Twitter" style={{height: '23px', margin: '0 10px'}} />
        </div>
      </div>
    </>
  );
}

export default Footer;
