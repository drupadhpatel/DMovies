import React, { useEffect, useRef } from 'react'
import './Nav.css'
import logo from '../../assets/Dmovieslogo.png'
import search from '../../assets/search.svg'
import bell from '../../assets/bell-icon.svg'
import profile from '../../assets/profile-user.svg'
import drop from'../../assets/drop-down.svg'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'
function Nav() {
  const navigate=useNavigate();
  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div className='navbar' ref={navRef}>
     <div className='nav-left'>
        <img src={logo} alt='Dmovies'/>
       
        <ul>
        <li onClick={()=>{navigate('/')}}>Home</li>
        <li onClick={()=>{navigate('/Tvshows')}}>Web Series  </li>
        <li>Movies</li>
        <li>Most Popliar</li>
        <li>My List</li>
        <li>Browse by Language</li></ul></div>
        <div className='nav-right'>
          <div className="search">
          <img src={search} alt="searchbar" className='sicons invert' />
          <input className='search_bar' type='text' placeholder='Search..'onClick={()=>{navigate('/Searchbar')}}></input></div>
          <img src={bell} alt='bell icon' className='icons invert'/>
          <div class="nav-profile-container">
          <div className='nav-profile'>
            <img src={profile} className='invert'></img>
            <img src={drop}  className='drop invert'></img>
            
            <div className='dropdown' onClick={()=>{logout()}} >
              <p>Sign out</p>
            </div>
            </div>
            </div>
            </div>
           
     
    </div>
  )
}

export default Nav
