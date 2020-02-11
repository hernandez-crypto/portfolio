import React from 'react';
const projectList = [
  {
    name: 'Tic-Tac-Toe',
    description: (
      <p>
        This is a fullstack app for tic-tac-toe which features an AI and
        Multiplayer. During the development of this app, I learned some game
        theory through the production of the minimax algorithm. Check out this{' '}
        <a
          href='https://github.com/hernandez-crypto/ttt-client/blob/master/src/components/Tic-Tac-Toe/Offline/ComputerPlayer.js'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'green' }}
        >
          link
        </a>{' '}
        to see to see how it was built!
      </p>
    ),
    stack: [
      'react-plain',
      'css3-plain',
      'javascript-plain',
      'express-original',
      'nodejs-plain',
      'heroku-plain',
      'postgresql-plain',
    ],
    imageLink: 'ticTacToe.png',
    liveSite: 'https://ttt-client.hernandezjulio58.now.sh/',
    clientURL: 'https://github.com/hernandez-crypto/ttt-client',
    serverURL: 'https://github.com/hernandez-crypto/ttt-server',
  },
  {
    name: 'Live List',
    description: ` 
        Mobile app developed with 4 other developers. I mainly worked on testing 
        for the front and back end, but I also assisted with styling and hooking 
        up some endpoints. I also was introduced to Cypress during this project in
        a TDD environment.
    `,
    stack: [
      'react-plain',
      'css3-plain',
      'javascript-plain',
      'express-original',
      'nodejs-plain',
      'heroku-plain',
      'postgresql-plain',
    ],
    imageLink: 'liveList.png',
    liveSite: 'https://social-playlist.netlify.com/',
    clientURL: 'https://github.com/thinkful-ei-heron/SocialPlaylist-Client',
    serverURL: 'https://github.com/thinkful-ei-heron/SocialPlaylist-server',
  },
  {
    name: 'Spaced Repetition',
    description: (
      <p>
        This app was build with the goal of assisted learning by utliziting a
        technique called spaced repetition. After users have signed up, quizzing
        oneself results in the database sorting itself differently. Developed
        with a partner :{' '}
        <a
          href='https://github.com/shannon-lichtenwalter'
          target='_blank'
          rel='noopener noreferrer'
        >
          Shannon Lichtenwalter
        </a>
        .
      </p>
    ),
    stack: [
      'react-plain',
      'css3-plain',
      'javascript-plain',
      'express-original',
      'nodejs-plain',
      'heroku-plain',
      'postgresql-plain',
    ],
    imageLink: 'spacedRepetition.png',
    liveSite: 'https://spaced-repetition-julio-shannon-client.now.sh/',
    clientURL:
      'https://github.com/thinkful-ei-heron/spaced-repetition-Julio-Shannon-client',
    serverURL:
      'https://github.com/thinkful-ei-heron/spaced-repetition-Julio-Shannon-server',
  },
  {
    name: 'Bookmarker 9000',
    description: `
      
        Web App used to store URLs. First project made using jQuery and HTML5.
        This project helped me develop a solid comprehension of HTML5, which 
        translated into a solid foundation for React. My first API was built for this app
        which introduced RESTful patterns.
      
    `,
    stack: [
      'html5-plain',
      'css3-plain',
      'javascript-plain',
      'express-original',
      'nodejs-plain',
      'heroku-plain',
      'postgresql-plain',
    ],
    imageLink: 'bookmarker.png',
    liveSite: 'https://thinkful-ei-heron.github.io/julio-bookmark-v2/',
    clientURL: 'https://github.com/thinkful-ei-heron/julio-bookmark-v2',
    serverURL: 'https://github.com/hernandez-crypto/bookmark-server',
  },
  {
    name: 'Waitstaff Calculator',
    description: `
      
        This is a static web app that was used to learn about React state
        management. During development, flexbox and React lifecycle was 
        learned in order to deliver the assignment efficiently.
      
    `,
    stack: ['react-plain', 'css3-plain', 'javascript-plain'],
    imageLink: 'waitStaffCalc.png',
    liveSite: 'https://hernandez-crypto.github.io/waitstaff-calculator/',
    clientURL: 'https://github.com/hernandez-crypto/waitstaff-calculator',
  },

  {
    name: 'The Office Quiz',
    description: (
      <p>
        This app is a short quiz that tests your knowledge on the show The
        Office. It was built to learn app architecture and React state
        management. Developed with a partner :{' '}
        <a
          href='https://github.com/wjacobs71086'
          target='_blank'
          rel='noopener noreferrer'
        >
          Wesley Jacobs
        </a>
        .
      </p>
    ),
    stack: ['html5-plain', 'css3-plain', 'javascript-plain'],
    imageLink: 'theOfficeQuiz.png',
    liveSite: 'https://thinkful-ei-heron.github.io/q-app-julio-wesley/',
    clientURL: 'https://github.com/thinkful-ei-heron/q-app-julio-wesley',
  },
];
export default projectList;
