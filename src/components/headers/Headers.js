import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='containerhead'>
      <div className='contents'>
        <div className='imagecontainer'>
          <img src="./assets/top-bar-bg.png" />
          <div className='logo'>
            <img src="./assets/logo.png" />
          </div>
          <div className='textcont  d-md-block'>
            <h2>Zam Zam Restaurant</h2>
            <h5 className='mt-1'>Red Cross Rd,Kozhikode</h5>
          </div>
        </div>
        <div className='icons'>
          <div className='icon'><img src="./assets/icon-search.png" /></div>
          <div className='icon'><img src="./assets/icon-cart-active.png" /></div>
          <div className='icon'><img src="./assets/icon-menu.png" /></div>
        </div>

      </div>
    </div>
  )
}

export default Header