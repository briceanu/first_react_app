import React from 'react';
// eslint-disable-next-line
import info from '../style/info.scss';
import person_640 from '../Assets/person_640.jpg';
// eslint-disable-next-line
import person_1280 from '../Assets/person_1280.jpg';
// eslint-disable-next-line
import person_1920 from '../Assets/person_1920.jpg';
import linkedin from '../Assets/linkedin.svg';
import email from '../Assets/email.png';

function Info() {
  return (
    <div className='info_wrapper'>
      <img
        className='profile_img'
        src={person_640}
        srcSet={`${person_640} 400w, ${person_1280} 900w, ${person_1920} 1200w`}
        sizes='(max-width: 400px) 40vw, (max-width: 1208px) 40vw, 40vw'
        alt='profile_picture'
      />
      <h1>Briceanu Teodor</h1>
      <h3>Frontend Developer</h3>
      <a href='/' className='site'>
        teodorbriceanu.website
      </a>
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
