import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import icon from '../../assets/icon.png' 
import search from '../../assets/search.png'
import voicesearch from '../../assets/voice-search.png'
import userprofile from '../../assets/user_profile.jpg'
const Navbar = () => {
  return (
    <div className='mainNavbar'>
      <div className="navLeft">
        <img src={menu} alt='' />
        <img src={icon} alt='' />
        <h1>YouTube</h1>


      </div>
      <div className="search">
       <input type='text' placeholder='search' />
        <img src={search} alt='' />
        <img src={voicesearch} alt='' />

      </div>
      <div className="right">
        <p>create +</p>
       
      </div>
      <div className="usericon">
        <img src={userprofile} alt='' />
      </div>
      
    </div>
  )
}

export default Navbar
