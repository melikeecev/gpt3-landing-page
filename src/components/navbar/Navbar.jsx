import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='gpt__navbar'>
            <div className='gpt__navbar-links'>
                <div>
                    <p>GPT-3</p>
                </div>
                <div>
                    <p>Home</p>
                    <p>What is GPT?</p>
                    <p>OpenAI</p>
                    <p>CaseStudies</p>
                    <p>Library</p>
                </div>
                <div>
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar