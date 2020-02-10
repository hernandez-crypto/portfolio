import React, { Component } from 'react';
import projectList from './ProjectList';
import './Projects.css';
export class Projects extends Component {
  generateTechStack(arr) {
    return arr.map((icon) => (
      <i key={icon} id='devicon' className={`devicon-${icon} colored`} />
    ));

    // <i key={item} id='devicon' className={`devicon-${item}-original colored`} />
    // <i key={item} id='devicon' className={`devicon-${item}-plain colored`} />
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
              clientURL,
              serverURL,
              description,
            } = item;
            return (
              <div key={name} className='projectItemStyles'>
                <h3>{name}</h3>
                <img
                  src={require(`../images/projects/${imageLink}`)}
                  alt={name}
                  className='picStyles'
                />
                <p>{description}</p>
                <div className='deviconContainer'>
                  {this.generateTechStack(stack)}
                </div>
                <h4>Links</h4>
                <div className='linksContainer'>
                  <a href={liveSite} target='_blank' rel='noopener noreferrer'>
                    Live Site
                  </a>
                  <p>|</p>
                  <a
                    href={clientURL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='site project'
                  >
                    Client Repo
                  </a>
                  {serverURL ? (
                    <>
                      <p>|</p>
                      <a
                        href={liveSite}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Server Repo
                      </a>
                    </>
                  ) : (
                    () => {}
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Projects;
