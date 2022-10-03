import React from 'react'
import back from './Images/backtracking.PNG'
import todo from './Images/todo.PNG'
import clock from './Images/clock.PNG'
import blog from './Images/blog.PNG'
import ecom from './Images/e-com.PNG'
import todoui from './Images/todoui.PNG'


const Portfolio = () => {
  return (
    <div className='portfolio-container' id='portfolio'>
        <h2>MY PROJECTS</h2>
        <hr />
        <div className="sites">
            <a href='https://shar1q-codes.github.io/backtracking/' target='blank'><img src={back} alt="" /></a>
            <a href='https://shar1q-codes.github.io/Todo-App-Mobile/' target='blank'><img src={todoui} alt="" /></a>
            <a href="https://shar1q-codes.github.io/Clock/" target='blank'><img src={clock} alt="" /></a>
            <a href="https://shar1q-codes.github.io/TODO-JS/" targt='blank'><img src={todo} alt="" /></a>          
            <a href="https://idyllic-bombolone-4db9e3.netlify.app" target='blank'><img src={blog} alt="" /></a>
            <a href="https://gleeful-puppy-55064d.netlify.app" target='blank'><img src={ecom} alt="" /></a>
        </div>
    </div>
  )
}

export default Portfolio