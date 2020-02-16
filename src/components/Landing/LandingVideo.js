import React, { Component } from 'react';
import './Landing.css';

class LandingVideo extends Component {
  render() {
    return (
      <video
        id='background-video'
        className='landingStyles'
        width='100%'
        height='100%'
        loop
        autoPlay
        playsInline
      >
        <source src={require('../video/particles.mp4')} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    );
  }
}
export default LandingVideo;
