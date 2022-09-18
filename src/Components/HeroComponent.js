import React from 'react'
import bannerGuy from './Images/bannerguy.png'

const HeroComponent = () => {
  return (
    <div>
        <div className='wave-bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='the-wave'><path fill= '#006661' fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div className="hero-container">
            <div className='desc-section'>
                <div className='desc-section-detials'>
                    <p className='p-name'>Hi, I am Syed Shariq Hussain</p>
                    <p className="p-job">A MERN-Stack Developer</p>
                </div>
                <div className="desc-section-buttons">
                    <p>Get ready to turn ideas into reality</p>
                    <button className='hire-me-btn'>Hire Me</button>
                    <button className="get-resume-btn">Get Resume</button>
                </div>
            </div>
            <div className='hero-img-section'>
                <img src={bannerGuy} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default HeroComponent