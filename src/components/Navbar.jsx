import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/nynishuyadav85', '_blank');
  }

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/nishant-y-051428105/', '_blank');
  }

  const handleTwitterClick = () => {
    window.open('https://x.com/nynishu15', '_blank');
  }

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nynishu2915/', '_blank');
  }

  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt='logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaGithub onClick={handleGithubClick} style={{ cursor: 'pointer' }} />
        <FaLinkedin onClick={handleLinkedinClick} style={{ cursor: 'pointer' }} />
        <FaTwitterSquare onClick={handleTwitterClick} style={{ cursor: 'pointer' }} />
        <FaInstagram onClick={handleInstagramClick} style={{ cursor: 'pointer' }} />
      </div>
    </nav>
  )
}

export default Navbar