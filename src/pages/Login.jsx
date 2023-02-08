
import React, {useState , useRef, useEffect} from 'react'
import Nav from '../components/Nav'
import Nav_login from '../components/Nav_login'
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom"
import Footer from '../components/Footer';
import Home_login from '../components/Home_login'

const Login = () => {

    const [emails,setEmails]=useState([]);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate=useNavigate();
    const [coin, setCoin] = useState();
    const addEmail = async(e) => {
      const response = await fetch('http://192.168.43.215:3000/auth/login', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value
        })
      })
      const data = await response.json();
      console.log(data);
      if(data.error === 'unauthorized') {
        alert('unauthorized attempt');
      }
      else {
        localStorage.setItem("user", JSON.stringify(data));
        setCoin(data);
      }
    }

    useEffect(() => {
      if(coin)navigate("/");
    }, [coin]);

    // const addEmail=(e)=>{
    //   setEmails(prev=> [...prev,{id: uuid() ,email:emailRef.current.value, password:passwordRef.current.value}])
    //   console.log(emails);
    // }

  return (
    <div>
        <Nav/>
        <div class='d-flex justify-content-center'>
    <div class='py-5'>
    <h1 class='py-3'>Log in to your account</h1>
      <form>
      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <label class="form-label" >Email address</label>
        <input type="email" ref={emailRef} class="form-control" placeholder='Enter email'/>
        
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <label class="form-label" >Password</label>
        <input type="password" ref={passwordRef} class="form-control" placeholder='*********' autoComplete='off' />
        
      </div>

      {/* <!-- 2 column grid layout for inline styling --> */}
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
            <p class="form-check-label" style={{fontSize: "14px"}}> Remember me</p>
          </div>
        </div>

        <div class="col">
          {/* <!-- Simple link --> */}
          <a href="#!" style={{fontSize: "14px"}}>Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="button" onClick={e=>addEmail(e)} class="btn btn-primary btn-block mb-4 w-100">Log in</button>
      <button type="button" class="btn btn-light btn-block mb-4 w-100">Sign in with google</button>

      {/* <!-- Register buttons --> */}
      <div class="text-center">
        <p style={{fontSize: "12px"}}>Don’t have an account? <Link to="/signup">signup</Link></p>
      </div>
    </form>
    </div>
    </div>
    <Footer />
    </div>
  )
}
export default Login;