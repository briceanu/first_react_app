// eslint-disable-next-line
import interests from '../style/interests.scss';
import React from 'react';

function Interests({ name }) {
  return (
    <div>
      <h3 className='interests'>{name}</h3>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </div>
  );
}

export default Interests;
