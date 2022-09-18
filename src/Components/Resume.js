import React from 'react'
import guy from './Images/resume-guy-img.png'

const Resume = () => {
  return (
    <div id='resume' className='resume-container'>
        <h2>Resume</h2>
        <hr className='hr'/>
        <div className='resume'>
            <div>
                <h2>Work Experience</h2>
                <hr />
                <div>
                    <p className='ball'></p>
                    
                    <p>Trainee at Prepbytes</p>
                    <p></p>
                </div>

                <h2>Education</h2>
                <hr />
                <div>
                    <p className='ball'></p>
                    <p>ISL Engineering College</p>
                    <p>Bachelors in Computer Science</p>
                    <p></p>
                </div>
            </div>
            <div>
                <img src={guy} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Resume