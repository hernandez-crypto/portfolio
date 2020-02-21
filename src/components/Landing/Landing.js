import React, { Component } from 'react';
import LandingPicture from './LandingPicture';
import './Landing.css';

export class Landing extends Component {
  state = { style: 'picture' };
  render() {
    return (
      <section id='landing'>
        <header role='banner'>
          <h1>Julio Hernandez</h1>
          <h2>Software Engineer</h2>
        </header>
        <LandingPicture />
      </section>
    );
  }
}
export default Landing;
