import React, { useState } from 'react'
// import "./Login.css"
import logo from '../../assets/Dmovieslogo.png'
import { login,signup } from '../../firebase'
import loading from '../../assets/loading.gif'
function Login() {
  const [SignState,setSignState]=useState("Sign IN")
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  const [loading,setloading]=useState(false)
  const user_auth=async(e)=>{
    e.preventDefault();
    setloading(true)
      if(SignState==="Sign IN"){
        await login(email,pass)
      }else{
        await signup(name,email,pass)
      }
      setloading(false)
  }
  return (
    loading?<div className='loading_pg invert'><img src={loading}></img></div>:
    <div className='login'>
      <img src={logo}  className="login-logo " alt='Dmovieslogo'/>
      < div className='login-form'>
        <h1>{SignState}</h1>
        <form >
          {SignState==="Sign UP"?<input value={name} onChange={(e)=>{setname(e.target.value)}} type='text' placeholder='your name'/>:<></>}
          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type='text' placeholder='Emali'/>
          <input  value={pass} onChange={(e)=>{setpass(e.target.value)}} type='text' placeholder='Password'/>
          <button onClick={user_auth} type='submit'>{SignState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='sign-in'>
          {SignState==="Sign IN"?<p>New To DMovies <span onClick={()=>{setSignState("Sign UP")}}>Sign UP</span></p>:<p>Already have account? <span onClick={()=>{setSignState("Sign IN")}}>Sign IN</span></p>}
      </div>
      </div>
       </div>
  )
}

export default Login