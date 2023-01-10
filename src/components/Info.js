import React from 'react';
import info from '../style/info.scss';
import profile_img from '../Assets/profile_img.jpg';
import linkedin from '../Assets/linkedin.svg';
import email from '../Assets/email.png';

function Info() {
  return (
    <div className='info_wrapper'>
      <img className='profile_img' src={profile_img} alt='profile_picture' />
      <h1>Briceanu Teodor</h1>
      <h3>Frontend Developer</h3>
      <a href='#'>teodorbriceanu.website</a>
      <div className='buttons_wrapper'>
        <button className='email'>
          <img src={email} alt='email link' /> Email
        </button>
        <button className='linkedIn'>
          <img src={linkedin} alt='linkedIn link' /> LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
