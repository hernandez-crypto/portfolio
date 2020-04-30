import React from 'react';
import projectList from './ProjectList';
import './Projects.css';

export default function Projects() {
  function GenerateTechStack({ stack }) {
    return stack.map((icon) => (
      <i key={icon} id='devicon' className={`devicon-${icon} colored`} />
    ));
  }

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
              <div className='projectDescription'>{description}</div>
              <div className='deviconContainer'>
                <GenerateTechStack stack={stack} />
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
                      href={serverURL}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Server Repo
                    </a>
                  </>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
