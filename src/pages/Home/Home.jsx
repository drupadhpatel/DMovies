import React from 'react'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import herobanner from'../../assets/hero.jpg'
import play from'../../assets/play.svg'
import info from'../../assets/info.svg'
import Titlecard from '../../components/Titlecard/Titlecard'
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <div className='Home'>
        <Nav/>
        <div className=" hero">
          <img src={herobanner} className='banner-img'/>
          <div className='hero-caption'>
            <div className='hero-dis'> 
            <h1>OBLIVION</h1>
            <p>aliens known as Scavengers attack Earth and destroy the Moon, triggering global natural disasters. Although humanity wins the war using nuclear weapons, Earth is left uninhabitable.</p>
            <div className='hero-btn'>
            <button className='btn'><img src={play} alt='play'/><p>Play</p></button>
            <button className='btn dark'><img src={info} alt='info'/><p>Info</p></button>
            </div>
          </div>
          <Titlecard/>
          <div className="more-cards">
          <Titlecard title={"Popular On DMovies"} category={"popular"}/>
          <Titlecard title={"Top Rated"} category={"top_rated"}/>
          <Titlecard title={"Upcoming"} category={"upcoming"}/>
          <Titlecard title={"Bollywood Hits"} category={"now_playing"}/>
          
          </div>
          <Footer/>
          </div>
          
          </div>
          
         </div>
  )
}

export default Home