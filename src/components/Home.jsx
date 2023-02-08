import React, { useState, useEffect } from 'react'
import Cards from "./Cards";
import Nav from "./Nav";
import Block from "./Block";
import Footer from './Footer';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
    const getData = async () => {
      const surl = `http://192.168.43.215:3000/articles`;
      const response = await axios.get(
          surl
      );
      console.log(response.data);
      setBlogs(response.data);
    }
    useEffect(() => {
      getData();
    }, []);

  return (
    <div>
      <Nav/>
      <Block/>
      <div className="container-fluid d-grid gap-3" style={{padding:'7%'}}>
        <div className='row'>
          <div className='col-lg-3'>
            <input type="text" placeholder="Search"></input>
          </div>
        <div className='col-lg-6'></div>
        <div className='col-lg-3'>Search by Category</div>
      </div>

      <div className='row'>
        {blogs.length>0?(
            blogs.map((m)=>{
                return <Cards blog = {m} />
            })
        ):('')}
    
      </div>
    </div> 
    <Footer/>
    </div>
  )
}

export default Home