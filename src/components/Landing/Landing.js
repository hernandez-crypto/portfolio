import React from 'react';
import LandingVideo from './LandingVideo';
import './Landing.css';

export default function Landing() {
  return (
    <section id='landing'>
      <header role='banner'>
        <h1>Julio Hernandez</h1>
        <h2>Software Engineer</h2>
      </header>
      <LandingVideo />
    </section>
  );
}
