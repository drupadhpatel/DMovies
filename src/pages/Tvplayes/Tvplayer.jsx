import React, { useEffect, useState } from 'react'
import './Tvplayer.css'
import back from '../../assets/back.svg'
import { useNavigate, useParams } from 'react-router-dom';
function Tvplayer() {
    const [tvapi,settvapi]=useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    })
    const{id} =useParams();
    const navigate=useNavigate();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTAzNGM4YmY2MzVjODU4OGVjMGJhNzhhMmM0ZmViOSIsIm5iZiI6MTc1NDczNDIyNi4yMDg5OTk5LCJzdWIiOiI2ODk3MWU5MjRlODEwMjRhZWFjNGI2NjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n6HFjuT0synPcG8JZhBcApGDNmaw6jOW2UvyiptuNJs'
        }
      };
      
      useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => settvapi(res.results[0]))
        .catch(err => console.error(err));
    },[id])



  return (
   <div className='Tvplayer'>
         <img src={back} alt='' className='invert' onClick={()=>{navigate(-1)}}></img>
         <iframe width='90%' height='90%'
         src={`https://www.youtube.com/embed/${tvapi.key}`}
         title='trailer' frameBorder='0' allowFullScreen></iframe>
       
      <div className='play-info'>
       <p>{tvapi.published_at.slice(0,10)}</p>
       <p>{tvapi.name}</p>
       <p>{tvapi.type}</p>
   
       </div>
       </div>
   
  )
}

export default Tvplayer