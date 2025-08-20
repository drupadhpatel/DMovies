import React from 'react'
import './Footer.css'
import insta from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-icon'>
        <img src={insta} alt=''></img>
        <img src={facebook} alt=''></img>
        <img src={youtube} alt=''></img>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>  
        <li>Cookies</li>
        <li>Contact Us</li>
      </ul>
      <p class="copyright">
  &copy; 2025 DMovies. All rights reserved.
      </p>

    </div>
    
  )
}

export default Footer