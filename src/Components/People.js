import React from 'react'
import girl from './Images/testimonial-img1.png'
import man from './Images/testimonial-img2.png'
import popo from './Images/people.PNG'

const People = () => {
  return (
    <div className='people-container'>
        <h2>What People Say About Me</h2>
        <hr />
        <div className='people'>
            <div>
                <img src={girl} alt="" />
                <p className='name'>Asha Gupta</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi accusamus vel vero, eveniet sunt harum nostrum reprehenderit, architecto praesentium iusto maiores libero facilis error.</p>
            </div>
            <div>
                <img src={man} alt="" />
                <p className='name'>Vivek</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequuntur sequi veniam odit minima excepturi aliquid aliquam atque consequatur doloribus voluptatibus maiores, nulla ipsa nesciunt!</p>
            </div>
            <div>
                <img src={popo} alt="" className='popo'/>
                <p className="name">Rajan</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cumque quo, accusamus quasi quaerat, suscipit laudantium est soluta dolor in architecto nemo vel nulla hic?</p>
            </div>
        </div>
    </div>
  )
}

export default People