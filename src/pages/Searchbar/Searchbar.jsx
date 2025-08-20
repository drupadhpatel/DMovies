import React, { useState, useEffect } from 'react'
import './Searchbar.css'
import here from "../../assets/hero.jpg"
import { Link } from 'react-router-dom'

function Searchbar() {
  const [searchquery, setsearchquery] = useState("")
  const [results, setResults] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTAzNGM4YmY2MzVjODU4OGVjMGJhNzhhMmM0ZmViOSIsIm5iZiI6MTc1NDczNDIyNi4yMDg5OTk5LCJzdWIiOiI2ODk3MWU5MjRlODEwMjRhZWFjNGI2NjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n6HFjuT0synPcG8JZhBcApGDNmaw6jOW2UvyiptuNJs'
    }
  };

  useEffect(() => {
    if (searchquery.trim().length === 0) {
      setResults([]) // empty query → clear results
      return
    }

    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchquery}&include_adult=false&language=en-US&page=1`,
          options
        )
        const data = await res.json()
        setResults(data.results || [])
      } catch (err) {
        console.error(err)
      }
    }

    fetchMovies()
  }, [searchquery])
   return (
     <div className='searchbar'>
      
       <div className='Search_inp'><input type='text' placeholder='Search your favorite tv shows' onChange={(e)=>setsearchquery(e.target.value)}></input></div>
        <div className='mov_ele'>
        {results.filter((card) => card.backdrop_path).map((card,object)=>{
          return <Link to={`Search_player/${card.id}`}className='card' key={object} >
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.title} ></img>
          <p>{card.title}</p>
         </Link>
        })} 
        </div>
         
     </div>
   )
 }

export default Searchbar
