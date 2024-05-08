import React from 'react';
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="header" className="intro-info">
        <div id="logo">
          <img src={'/mylogo.svg'} alt="Hannah Warren's Logo" />
        </div>
        <h1 className='header-1'>Hannah Warren's Portfolio</h1>
        <p>This whole site was coded by me, and displays work done by me.<br></br> <span className='header-1'>ENJOY!</span></p>
      </div>
      <div className="card-container"> 
        <div className="card-info">
          <h2>My skills</h2>
          <ul>
            <li><span>Large scale print projects</span>, such as a tradeshow booth,</li>
            <li><span>front end development</span> using HTML and CSS, and</li>
            <li><span>small scale print</span>, including small business stationery.</li>
          </ul>
          </div>
          <div className="card-info">
          <h2>My experience</h2>
          <ul>
            <li><span>Graphic Design and User Interface Intern</span><br></br> Idaho National Laboratory, Idaho Falls, ID | 2022-2023</li>
            <li><span>Front End Development Intern</span><br></br> Idaho National Laboratory, Idaho Falls, ID |  2023-present</li>
          </ul>
        </div>
      </div>
      <div className="card-container"> 
        <div className="card-game">
          <h2>Here's this silly game, try to get to 843!</h2>
          <div className="game-container">
            <div className="game-actions">
              <h4>Click these!</h4>
              <button onClick={() => setCount((count) => count + 1)}>
                your number + 1
              </button>
              <button onClick={() => setCount((count) => count - 1)}>
                your number - 1
              </button>
              <button onClick={() => setCount((count) => count * 5)}>
                your number x 5
              </button>
              <button onClick={() => setCount((count) => count / 5)}>
              your number / 5
              </button>
              <button onClick={() => setCount((count) => count + 12)}>
                your number + 12
              </button><button onClick={() => setCount((count) => count + 8)}>
                your number + 8
              </button><button onClick={() => setCount((count) => count + 9)}>
                your number + 9
              </button>
              <button onClick={() => setCount((count) => count * 6)}>
                your number x 6
              </button>
            </div>
            <div className="game-results">
              <h4>Your results:</h4>
              <p>Your number is {count} !</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
