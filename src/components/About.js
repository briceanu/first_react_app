import React from 'react';
import about from '../style/about.scss';
function About({ name }) {
  return (
    <div>
      <h3 className='about'> {name} </h3>
      <p>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>
    </div>
  );
}

export default About;
