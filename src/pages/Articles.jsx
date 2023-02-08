import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import axios from 'axios';


const Articles = () => {
   const [blog, setBlog] = useState([]);
   const {id}=useParams();
   const getData = async () => {
     const surl = `http://192.168.43.215:3000/articles/${id}`;
     const response = await axios.get(
         surl
     );
     console.log(response.data);
     setBlog(response.data);
   }
   useEffect(() => {
     getData();
   }, []);


  return (
    <div>
      <Nav/>
         <div className='d-flex justify-content-center flex-column'>
            <div className='d-flex flex-column p-5 '>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '16px',lineHeight: '24px',
                color: '#7F56D9'}} className='d-flex justify-content-center'>
                   Design 
                </div>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '250%',lineHeight: '60px',
                color: '#101828'}} className='d-flex justify-content-center'>
                   {blog.title?blog.title:''}
                </div>
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '15px',lineHeight: '30px',
                color: '#475467'}} className='d-flex justify-content-center'>
                    this is to inform you that this is to inform you that this is to inform you that this is to inform you that
                </div>
                
                <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '16px',lineHeight: '24px',
                color: '#475467'}} className='d-flex justify-content-center'>
                      {blog.created_at?blog.created_at.slice(0, 10):''}
                </div>
            </div>
            <div className='d-flex justify-content-center p-5' style={{marginTop:'-5%'}}>
               <img src="/pixels.jpeg" className="card-img-top img-fluid" alt="..."/> 
            </div>
            <div className='d-flex justify-content-center p-5' style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '18px',lineHeight: '30px',
                color: '#475467'}}>
                  <p>{blog.text}</p>
            </div>
       </div>
       <Footer />
    </div>
  )
}

export default Articles