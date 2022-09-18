import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <h2>Contact Me</h2>
        <hr />
        <div className='contact-container'>
            <div className='connect'>
                <h2>Lets Connect</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quaerat quas unde voluptate commodi nemo corrupti suscipit cupiditate quos officia.</p>
            </div>
            <div className='form'> 
                <h2>Send Me A Message</h2>
                <form action="">
                    <label htmlFor="name">First & Last Name</label>
                    <input type="text" required id='name'/>

                    <label htmlFor="phone">Phone No.</label>
                    <input type="text" id='phone'/>

                    <label htmlFor="email">Email</label>
                    <input type="text" id='email'/>

                    <label htmlFor="msg">Message</label>
                    <input type="text-box" id='msg'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact