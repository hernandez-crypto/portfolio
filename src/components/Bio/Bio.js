import React from 'react';
import './Bio.css';

export default function Bio() {
  return (
    <section id='bio' className='sectionStyles'>
      <h2>About Me</h2>
      <div className='itemStyles'>
        <p>
          Hello! I’m a recent grad of Thinkful’s Engineering Immersion Program.
          In my free time, I like to go hiking on Californias trails near San
          Bernardino. Recently, I moved across the country from Chicago to LA to
          pursue my dreams. I’m closer to my dream city San Francisco and I also
          don’t have to drive through 2 feet of snow in a Honda.
        </p>
        <div className='bioSpace' />
        <p>
          My interest in web development originated from my fascination with
          computers. Computers help solve problems you didn't even know where
          there. And code is the toolbox that computer scientists and web
          developers use to solve those problems. I want to be in a position
          where I can use my creativity to solve complex problems. I enjoy the
          trial and error process because I know that if enough effort is put
          forth then that problem will be solved, and I will gain experience
          during the process. The tech industry also attracts many intelligent
          people, which I think is great because it provides an opportunity for
          learning from some of the worlds smartest people.
        </p>
      </div>
    </section>
  );
}
