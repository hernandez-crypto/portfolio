import React, { Component } from 'react';
import './Contact.css';
export class Contact extends Component {
  render() {
    return (
      <section id='contact' className='sectionStyles'>
        <h2>Contact Me</h2>
        <div className='contactStyles itemStyles'>
          <a href='tel:3312459841' className='phone'>
            <img
              src={require('../images/icons/phone.png')}
              alt='phoneIcon'
              className='iconStyles'
            />
          </a>
          <a
            href='https://github.com/hernandez-crypto'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={require('../images/icons/code.svg')}
              alt='gitHubIcon'
              className='iconStyles'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/julio-hernandez-03853b163/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={require('../images/icons/linkedin.svg')}
              alt='linkedInIcon'
              className='iconStyles'
            />
          </a>
          <a
            href='mailto:hernandezjulio58@ymail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={require('../images/icons/email.svg')}
              alt='emailIcon'
              className='iconStyles'
            />
          </a>
        </div>
      </section>
    );
  }
}
export default Contact;
