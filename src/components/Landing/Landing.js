import React from 'react';
import './Landing.css';

export default function Landing() {
  const LandingContent = ({ type = 'video' }) => {
    if (type === 'video') {
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
    if (type === 'picture') {
      return <div className='landingStyles' id='staticLanding' />;
    }
  };

  return (
    <section id='landing'>
      <header role='banner'>
        <h1>Julio Hernandez</h1>
        <h2>Software Engineer</h2>
      </header>
      <LandingContent type='video' />
    </section>
  );
}
