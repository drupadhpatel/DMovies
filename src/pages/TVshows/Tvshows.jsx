import React from 'react'
import Nav from '../../components/Nav/Nav'
import Titlecard, { Displayweb } from '../../components/Titlecard/Titlecard'
import Footer from '../../components/Footer/Footer'
import './Tvshows.css'
import tvshowposter from '../../assets/Tvshowsposter.jpg'
import play from '../../assets/play.svg'
import info from '../../assets/info.svg'

function Tvshows() {
  return (
    <div className='Tvshows'>
            <Nav/>
            <div className=" hero">
              <img src={tvshowposter} className='banner-img'/>
              <div className='hero-caption'>
                <div className='hero-dis'> 
                
                <p>An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain. Tokyo attempts to drown her sorrows. Sierra uses personal tactics to target a vulnerable Nairobi, while Suárez continues to hunt down Raquel.</p>
                <div className='hero-btn'>
                <button className='btn'><img src={play} alt='play'/><p>Play</p></button>
                <button className='btn dark'><img src={info} alt='info'/><p>Info</p></button>
                </div>
              </div>
              <Displayweb/>
              <div className="more-cards">
              <Displayweb title={"On The Air"} category={"on_the_air"}/>
              <Displayweb title={"Popular"} category={"popular"}/>
              <Displayweb title={"Top Rated"} category={"top_rated"}/>
              <Displayweb title={"Airing Today"} category={"airing_today"}/>
              </div>
              <Footer/>
              </div>
              
              </div>
              
             </div>
  )
}

export default Tvshows