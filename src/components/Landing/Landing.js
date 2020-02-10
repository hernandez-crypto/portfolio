import React, { Component } from 'react';
import LandingVideo from './LandingVideo';
import './Landing.css';

export class Landing extends Component {
  render() {
    return (
      <section id='landing'>
        <header role='banner'>
          <h1>Julio Hernandez</h1>
          <h2>Software Developer</h2>
        </header>
        <LandingVideo />
      </section>
    );
  }
}
export default Landing;
