import React from 'react';

const Block = () => {
  return (
    <>
      <div style={{height:'300%',padding:'7%',background: '#F9FAFB'}}>
       <div className='container-fluid '>
           <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '14px',lineHeight: '20px',
             color: '#7F56D9'}} className='p-1'>
               Resources
           </div>
           <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '600',fontSize: '200%',lineHeight: '60px',
             color: '#101828'}}  className='p-1'>
            Untitled blog
           </div>
           <div style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '400',fontSize: '20px',lineHeight: '30px',
             color: '#475467'}} className='p-2'>
               Tool and strategies modern teams need to help their companies grow.
           </div>
           <div className='row p-2'>
              <div className='col-lg-4'>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" autocomplete = 'off' />
                <button type="submit" class="btn btn-primary " style={{width:'100%',background:'#7F56D9', border: 'none'}}>Get Started</button>
                  
                </div>
                <div className='col-lg-2'>
                  <label for="exampleFormControlInput1" class="form-label" style={{fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '400',fontSize: '14px',lineHeight: '20px',
                      color: '#101828'}}>We care about your data in our <u>privacy policy</u> </label>
                </div>
           </div>
       </div>
    </div>
       
    </>
    
  )
}

export default Block;