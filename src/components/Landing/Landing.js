import React, { Component } from 'react';
import LandingVideo from './LandingVideo';
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
        {this.state.style === 'video' ? <LandingVideo /> : <LandingPicture />}
      </section>
    );
  }
}
export default Landing;
