import React from 'react';
import ReactDOM from 'react-dom';
import footer from '../footer.css'

const Footer = () => {
  return (
    <div>
        <div className='major-container_contained_shatru'>
          <div className = 'main-container_contained_shatru'>
                <div className='mid-block_contained_shatru'>
                    <div className='free-trial_contained_shatru'>
                        <h2 className='free-trial-heading_contained_shatru'>Start your 30 day free trial</h2>
                        <br />
                        <br />
                        <p className='free-trial-para_contained_shatru'>Write upto 10000 articles per year</p>
                    </div>
                    <div className='button-containers_contained_shatru'>
                        <button className='Learn-More_contained_shatru'>Learn More</button>
                        <button className='Get-Started_contained_shatru'>Get Started</button>
                    </div>
                </div>
            </div>

            <div className='footer-container_contained_shatru'>
                <div className='footer-top_contained_shatru'>
                    <div className='Untitled-UI-container_contained_shatru'>
                        <h3 className='Untitled-UI_contained_shatru'>Untitled UI</h3>
                        <br />
                        <div className='footer-span-container_contained_shatru'>
                            <span className='footer-span_contained_shatru'>Overview</span>
                            <span className='footer-span_contained_shatru'>Features</span>
                            <span className='footer-span_contained_shatru'>Pricing</span>
                            <span className='footer-span_contained_shatru'>Careers</span>
                            <span className='footer-span_contained_shatru'>Help</span>
                        </div>
                    </div>
                    <div className='footer-top-right_contained_shatru'>
                        <h5 className='stay-upto-date_contained_shatru'>Stay up to date</h5>
                        <br/>
                        <div className='stay-upto-date-container_contained_shatru'>
                            <input type='text' className='enter-your-email_contained_shatru' placeholder='Enter your email'/>
                            <button className='subscribe_contained_shatru'>Subscribe</button>
                        </div>
                    </div>
                </div>
                
                <div className='footer-bottom_contained_shatru'>
                    <hr className='horizontal-rule_contained_shatru'/>
                    <div className='copyright_contained_shatru'>
                        <p>© 2077 Untitled UI. All rights reserved.</p>
                    </div>
                </div>
                
            </div>
          </div>
    </div>
  )
}

export default Footer