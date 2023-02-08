import React, { useState, useEffect } from "react";
import articles from '../pages/Articles';
import { Link, useParams } from 'react-router-dom';

const Cards = ({blog}) => {
  return (
    <div className="col-lg-6">
        <div className="card" style={{width: '100%'}}>
            <div>
            <img src="/pixels.jpeg" className="card-img-top img-fluid" alt="..."/> 
            </div>
          
          <div style={{marginTop:'-15%',backdropFilter:'blur(5px)'}} >
            <div className='p-4'>
                   <div class="d-flex justify-content-between" style={{color:'#FFFFFF'}}>
                      <div>{blog.author.name}</div>
                      <div>{blog.title}</div>

                   </div>
                   <div style={{color:'#FFFFFF'}}>
                      {blog.created_at.slice(0, 10)}
                   </div>
            </div>
          </div>
        <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
         <p className="card-text">{ blog.categorys.length ? blog.categorys.map((m)=>{return <>{m.text}<br /></>}) : ''}</p>
        <Link className='btn' to={`/article/${blog.id}`} style={{color:'#6941C6'}}>
             Read post
        </Link>
          
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8335 14.1667L14.1668 5.83337M14.1668 5.83337H5.8335M14.1668 5.83337V14.1667" stroke="#6941C6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>
    </div> 
    
    </div>
  )
}
export default Cards;