import React from 'react';
import footerScss from '../style/footer.scss';
import github from '../Assets/github.svg';
import instagram from '../Assets/instagram.svg';
import facebook from '../Assets/facebook.svg';
import twitter from '../Assets/twitter.svg';

function footer() {
  return (
    <div>
      <footer>
        <a href='#'>
          <img src={twitter} alt='twitter_link' />
        </a>
        <a href='#'>
          <img src={facebook} alt='facbook_link' />
        </a>
        <a href='#'>
          <img src={instagram} alt='instagram_link' />
        </a>
        <a href='#'>
          <img src={github} alt='github_link' />
        </a>
      </footer>
    </div>
  );
}

export default footer;
