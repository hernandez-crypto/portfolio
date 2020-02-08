import React, { Component } from 'react';
import './components.css';
export class Bio extends Component {
  render() {
    return (
      <section id='bio' className='sectionStyles'>
        <h2>About Me</h2>
        <div className='itemStyles'>
          <p>
            Hello! I’m a recent grad of Thinkful’s Engineering Immersion
            Program. In my free time, I exercise and play sports. I don’t
            necessarily watch them, but I love moving around; you can catch me
            running around the block at 6 in the morning on my Rocky Balboa sh…
            Recently, I moved across the country from Chicago to LA to pursue my
            dreams. I’m one step closer to the tech hub and I also don’t have to
            drive through 2 feet of snow in a Honda.
          </p>
          <div className='bioSpace' />
          <p>
            I love building things from the ground up in order to provide
            solutions to everyday problems. I do this by thinking outside of the
            box, writing clean, accessible code and challenging myself to grow
            and learn every day. I'm excited to join a time of like-minded
            developers who thrive on teams where collaboration and innovation
            are key.
          </p>
        </div>
      </section>
    );
  }
}

export default Bio;
