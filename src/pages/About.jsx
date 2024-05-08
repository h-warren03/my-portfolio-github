import React from 'react';
import '../index.css'

function About() {

  return (
    <>
      <h1 className='header-1'>A little bit about me</h1>
      <div className='about-card-container'>
        <div className='about-info'>
          <img className='about-image' src='/assets/about_img.jpg'></img>
          
        </div>
        <div className='about-info'>
          <h2>Hi!</h2>
          <p>My name is Hannah Warren. I’m a Graphic Design and Advertising student at Grand Canyon University. Orignially from Idaho Falls, Idaho, I came to Phoenix, Arizona, the rich colors of the red rocks in the Valley inspire me!  Through my studies, I have come to excel in a majority of tools in the Adobe Creative Suite as well as honing my creative nature into well practiced design efficiency. I have applied my skills to large scale print projects, business presentations, all the way down to small business stationary sets that include business cards,  letterhead and personal envelopes. While I am still learning, I am confident in my abilities to handle assigned tasks, analyze target audiences, follow a detailed creative process, and ultimately produce a project in my own personal style that I am happy with and that also aligns with the requirements of the task.</p>
        </div>
      </div>
    </>
  )
}

export default About;
