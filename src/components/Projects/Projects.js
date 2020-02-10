import React, { Component } from 'react';
import projectList from './ProjectList';
import './Projects.css';
export class Projects extends Component {
  generateTechStack(arr) {
    return arr.map((item) => <i className={`devicon-${item}-plain colored`} />);
  }
  render() {
    return (
      <section id='projectList' className='sectionStyles'>
        <h2>Projects</h2>
        <div className='projectStyles'>
          {projectList.map((item) => {
            let {
              name,
              imageLink,
              stack,
              liveSite,
              codeURL,
              description,
            } = item;
            return (
              <div key={name} className='projectItemStyles'>
                <h3>{name}</h3>
                <img
                  src={require('../images/projects/placeholder.jpg')}
                  alt={name}
                  className='picStyles'
                />
                <p>{description}</p>
                {this.generateTechStack(stack)}
                <h4>Links</h4>
                <a href={liveSite} target='_blank' rel='noopener noreferrer'>
                  <img
                    src={require('../images/icons/livesite.jpg')}
                    alt='Live Site'
                    className='projectsIcons'
                  />
                </a>
                <a href={liveSite} target='_blank' rel='noopener noreferrer'>
                  <img
                    src={require('../images/icons/server.png')}
                    alt='Live Site'
                    className='projectsIcons'
                  />
                </a>
                <a
                  href={codeURL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='site project'
                >
                  <img
                    src={require('../images/icons/code.svg')}
                    alt='Code Site'
                    className='projectsIcons'
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Projects;
