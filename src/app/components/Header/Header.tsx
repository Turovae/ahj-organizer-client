import React from 'react';
import ChaosIcon from '../../../img/chaos-logo.png';
import SearchIcon from '../../../img/search-icon-google.svg';

import './header.css';

function Header (): React.ReactElement {
  return (
    <header className="header">
        <div className="header-logo">
          <img src={ChaosIcon} />
        </div>
        <div className="header-title">Chaos Organizer</div>
        <div className="header-search" title='Поиск...' aria-label='Поиск...'>
          <button type='button' className='btn-icon'>
            <img src={SearchIcon} alt='Search' />
          </button>
        </div>
      </header>
  );
}

export default Header;
