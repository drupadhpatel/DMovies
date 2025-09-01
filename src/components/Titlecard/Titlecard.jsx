import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import {Link} from 'react-router-dom'
import Player from '../../pages/Player/Player'


function Titlecard({title,category}) {
  const [aipData,setaipData]=useState([])
 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTAzNGM4YmY2MzVjODU4OGVjMGJhNzhhMmM0ZmViOSIsIm5iZiI6MTc1NDczNDIyNi4yMDg5OTk5LCJzdWIiOiI2ODk3MWU5MjRlODEwMjRhZWFjNGI2NjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n6HFjuT0synPcG8JZhBcApGDNmaw6jOW2UvyiptuNJs'
    }
  };
 
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setaipData(res.results))
      .catch(err => console.error(err));
  }, []);
  
 return (
    <div className='titlecard'><h2>{title?title:"Popular on DMovies"}</h2>
    <div className='card-list' >
      {aipData.map((card,index)=>{
         return <Link to={`/Player/${card.id}`} className='card' key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
          <p>{card.title}</p>
          </Link>
      })}
    </div>
  </div>
  )
}


 export function Displayweb({title,category}){
  const [tvshow,settvshow]=useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTAzNGM4YmY2MzVjODU4OGVjMGJhNzhhMmM0ZmViOSIsIm5iZiI6MTc1NDczNDIyNi4yMDg5OTk5LCJzdWIiOiI2ODk3MWU5MjRlODEwMjRhZWFjNGI2NjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n6HFjuT0synPcG8JZhBcApGDNmaw6jOW2UvyiptuNJs'
    }
  };
  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/tv/${category ? category : "airing_today"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => settvshow(res.results))
    .catch(err => console.error(err));
  } ,[])

  return(
    <div className='tvcard'><h3>{title?title:"Popular on DMovies"}</h3>
    <div className='card-list' >
      {tvshow.map((card,index)=>{
         return <Link to={`/Tvplayer/${card.id}`} className='card' key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
          <p>{card.name}</p>
          </Link>
      })}
    </div>
  </div>


  )

}

export default Titlecard;

