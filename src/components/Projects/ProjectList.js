import React from 'react';
const projectList = [
  {
    name: 'Tic-Tac-Toe',
    description: `
        This is a fullstack app for tic-tac-toe which features an AI and
        Multiplayer. During the development of this app, I learned some 
        game theory through the production of the minimax algorithm.
        
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
    imageLink: 'placeholder.jpg',
    liveSite: 'https://ttt-client.hernandezjulio58.now.sh/',
    codeURL: 'https://github.com/hernandez-crypto/ttt-client',
  },
  {
    name: 'Live List',
    description: ` 
      
        Mobile app developed with 4 other developers. Utilizes Google Maps API.
        Live List is an app to find cool and interesting new places to go. My
        GitHub skills were strenghtened during the development of this app.
      
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
    imageLink: 'placeholder.jpg',
    liveSite: 'https://social-playlist.netlify.com/',
    codeURL: 'https://github.com/thinkful-ei-heron/SocialPlaylist-Client',
  },
  {
    name: 'Spaced Repetition',
    description: (
      <p>
        This app was build with the goal of assisted learning by utliziting a
        technique called spaced repetition. After users have signed up, quizzing
        oneself results in the database storing itself differently. Developed
        with a partner :
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
    imageLink: 'placeholder.jpg',
    liveSite: 'https://spaced-repetition-julio-shannon-client.now.sh/',
    codeURL:
      'https://github.com/thinkful-ei-heron/spaced-repetition-Julio-Shannon-client',
  },
  {
    name: 'Bookmarker 9000',
    description: `
      
        Web App used to store URLs. First project made using jQuery and HTML5.
        This project helped me develop a solid comprehension of HTML5 which
        translated intuitively into React.
      
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
    imageLink: 'placeholder.jpg',
    liveSite: 'https://thinkful-ei-heron.github.io/julio-bookmark-v2/',
    codeURL: 'https://github.com/thinkful-ei-heron/julio-bookmark-v2',
  },
  {
    name: 'Waitstaff Calculator',
    description: `
      
        This is a static web app that was used to learn about React state
        management. Responsive web design was also practiced in the development
        of this app through the use of flexbox.
      
    `,
    stack: ['react-plain', 'css3-plain', 'javascript-plain'],
    imageLink: 'placeholder.jpg',
    liveSite: 'https://thinkful-ei-heron.github.io/q-app-julio-wesley/',
    codeURL: 'https://github.com/thinkful-ei-heron/q-app-julio-wesley',
  },
  {
    name: 'The Office Quiz',
    description: (
      <p>
        This app is a short quiz that tests your knowledge on the show The
        Office. It was built to learn app architecture and React state
        management. Developed with a partner :
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
    imageLink: 'placeholder.jpg',
    liveSite: 'https://thinkful-ei-heron.github.io/q-app-julio-wesley/',
    codeURL: 'https://github.com/thinkful-ei-heron/q-app-julio-wesley',
  },
];
export default projectList;
