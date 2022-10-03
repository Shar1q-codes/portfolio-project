import React from 'react'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <div id='home'>
        <div className="header-container">
            <div className="name-section">
                <p>Syed Shariq Hussain</p>
            </div>
            <div className="menu-section">
                <ul>
                    <li><HashLink to='/' className='link'>Home</HashLink></li> 
                    <li><HashLink to='#about' smooth className='link'>About</HashLink></li>
                   <li> <HashLink to='#portfolio' smooth className='link'>Projects</HashLink></li>
                    <li><HashLink to='#resume' smooth className='link'>Resume</HashLink></li>
                    <li><HashLink to= '#contact' smooth className='link'>Contact</HashLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header