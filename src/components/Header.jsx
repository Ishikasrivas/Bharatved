import React from 'react'
import Navbar from './Navbar';
const Header = () => {
  return (
    <div id = 'main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Launch Your app</span> With Confidence And Creativity</h1>
       <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dignissimos ex eum officia necessitatibus aspernatur corporis quaerat blanditiis provident eaque. Accusantium sapiente maiores eveniet repellat alias rem quae quo reprehenderit! </p>
      <a href="#" className='cv-btn'>Book Trial</a>
      </div>
    </div>
  )
}

export default Header;
