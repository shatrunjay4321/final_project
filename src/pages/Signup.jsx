
import React, { useState, useRef, useEffect } from 'react'
import Nav from '../components/Nav'
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid";
import Footer from '../components/Footer';

const Signup = () => {

  const signnameRef = useRef(null);
  const signemailRef = useRef(null);
  const signpassRef = useRef(null);
  const signcnfmpassRef = useRef(null);

  const [profiles, setProfiles] = useState([]);
  const addProfile = async (e) => {
    e.preventDefault();
    setProfiles({ id: uuid(), name: signnameRef.current.value, email: signemailRef.current.value, password: signpassRef.current.value })



    // const response = await fetch('http://192.168.43.215:3000/authors/add', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },

    //   body: JSON.stringify({
    //     name: signnameRef.current.value,
    //     email: signemailRef.current.value,
    //     password: signpassRef.current.value,
    //   })
    // })
    // const data = await response.json();
    // console.log(data);
    // localStorage.setItem("user", JSON.stringify(data));

    // console.log(data.errors[0]);
    // if (data.errors[1] === 'Name has already been taken') {
    //   alert('Name already in use');

    // }
    // if (data.errors[0] === 'Email is invalid') {
    //   alert('Email invalid');

    // }
    // if (data.errors[0] === 'Email has already been taken') {
    //   alert('Email already registerd');

    // }
    // if (signpassRef.current.value !== signcnfmpassRef.current.value){
    //   alert('enter same password')
    // }
    // if (data.errors[0] === 'Password is too short (minimum is 6 characters)') {
    //   alert('Password is too short (minimum is 6 characters)');

    // }








  // const signnameRef = useRef(null);
  // const signemailRef = useRef(null);
  // const signpassRef = useRef(null);

  // const navigate = useNavigation();
  // const [token,setToken] = useState();
  // const [profiles, setProfiles] = useState([]);

  // const addProfile=async(e)=>{
  //   e.preventDefault();
  //   setProfiles({id: uuid() ,name:signnameRef.current.value ,email:signemailRef.current.value, password:signpassRef.current.value})
  //   console.log(profiles);
  

  // const response = await fetch('http://192.168.43.215:3000/authors/add',{
  //   method:'POST',
  //   headers:{
  //     'Content-type':'application/json'
  //   },

  //   body:JSON.stringify({
  //     name:signnameRef.current.value,
  //     email:signemailRef.current.value,
  //     password:signpassRef.current.value,
  //   })
  // })
  //   const data = await response.json();
  //   console.log(data);
  //   localStorage.setItem("user",JSON.stringify(data));
  //   setToken(data);
  // }
  // const useNavigation = () => {

  // }
  // useEffect(()=>{
  //  if(token)navigate("/") 
  // },[token])
  
  return (
    <div>
      <Nav/>
      <div class='d-flex justify-content-center'>

        <div class='py-5'>
          <h1 class='py-3 px-5'>Create Account</h1>
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" >Name</label>
              <input ref={signnameRef} type="email"  class="form-control" name='name' placeholder='Enter name' autoComplete='off' required/>

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Email Address</label>
              <input ref={signemailRef} type="email"  class="form-control" name='email' placeholder='Enter email' required autoComplete='off'/>

            </div>
            <div class="form-outline mb-4">
              <label class="form-label" >Password</label>
              <input ref={signpassRef} type="password" class="form-control" name='password' placeholder='Create a password' required/>

            </div>

            <button type="button" onClick={e => addProfile(e)} class="btn btn-primary btn-block mb-4 w-100">Sign up</button>
            <button type="button" class="btn btn-light btn-block mb-4 w-100">Sign in with Google</button>

            <div class="text-center">
              <p style={{ fontSize: "12px" }}>Have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    <Footer />
    </div>
  )
}
}
export default Signup;