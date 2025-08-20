import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import { Route,Routes, useNavigate,useLocation } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import Tvshows from './pages/TVshows/Tvshows.jsx'
import Tvplayer from './pages/Tvplayes/Tvplayer.jsx'
import Searchbar from './pages/Searchbar/Searchbar.jsx'
function App() {
  const navigate=useNavigate();
  const location=useLocation ();
    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In")
        if(location.pathname ==='/Login'){
          navigate('/')
        }
       }else{
        console.log("Logged Out")
        navigate('/Login')
      }
    })
    return unsubscribe();
  },[navigate, location.pathname])
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/Login' element={ <Login/>}/>
        <Route path='/Player/:id' element={ <Player/>}/>
       <Route path='/Tvshows' element={<Tvshows/>}/>
       <Route path='/Search' element={<Searchbar/>}/>
       <Route path='/Tvplayer/:id' element={<Tvplayer/>}/>
       <Route path='/Searchbar' element={<Searchbar/>}/>
      </Routes>
     
    </div>
  )
}

export default App