import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <section className='top-nav-bar'>
        <nav>
          <ul className='nav-bar-items'>
            <li>
              <a href='#projectList'>
                <img
                  src={require('../images/icons/web-programming.svg')}
                  alt='Projects'
                  className='nav-icon'
                />
              </a>
            </li>
            <li>
              <a href='#landing'>
                <img
                  src={require('../images/icons/home.svg')}
                  alt='Home'
                  className='nav-icon'
                />
              </a>
            </li>
            <li>
              <a href='#contact'>
                <img
                  src={require('../images/icons/identification.svg')}
                  alt='Contact'
                  className='nav-icon'
                />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
export default Navbar;
