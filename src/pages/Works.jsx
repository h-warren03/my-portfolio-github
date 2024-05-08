import React from 'react';
import '../index.css'

function Works() {
  const webProjectList = [
    {
      title: 'Web Work Example #1', 
      subtitle: 'completed 2024',
      location: '/assets/cat.webp'
    },
    {
      title: 'Web Work Example #2', 
      subtitle: 'completed 2024',
      location: '/assets/cat.webp'
    },
    {
      title: 'Web Work Example #3', 
      subtitle: 'completed 2024',
      location: '/assets/cat.webp'
    },
  ]
  const printProjectList = [
    {
      title: 'Coachella Billboards', 
      subtitle: 'completed 2024',
      location: '/assets/billboard.png'
    },
    {
      title: 'Stationery Set', 
      subtitle: 'completed 2024',
      location: '/assets/stationery.png'
    },
    {
      title: 'Tradeshow Booth',
      subtitle: 'completed 2024',
      location: '/assets/trade-booth.png'
    },
  ]
  return (
    <>
          <h1 className='header-1'>My Works</h1>
      <div className='card-works'>
        <h2>Web Work</h2>
        <div className="test-card-container negative-margin">
          {webProjectList.map((project, index) => {
            return (
              <div className="test-card" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${project.location})`
                  }}
                >
                  <h3>{project.title}</h3>
                  <span>{project.subtitle}</span>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        <div className='card-works'>
        <h2>Print Works</h2>
        <div className="test-card-container negative-margin">
          {printProjectList.map((project, index) => {
            return (
              <div className="test-card" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${project.location})`
                  }}
                >
                  <h3>{project.title}</h3>
                  <span>{project.subtitle}</span>
                </div>
              </div>
            )
          })}
      </div>
      </div>
    </>
  )
}

export default Works;
