import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Memory from './Create.js'

export default function Fundraising() {
  return (
    <div id="Page1" className="d-flex p-2 justify-content-center">     
      {ImageOverlayComponent()}
      <img class="image" src="https://www.justgiving.com/prismic/assets/jg-startfundraising-website/static/c8151e11-e94e-4d10-bc99-34997041ea51_revealer-crowdfunding-9ff20cae398598abb6fb45597ddf8580.svg" alt="image 2 alt text" height="600" width="100%"></img>
      
    
    </div>
  )
}
const ImageOverlayComponent = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: 'url(https://www.justgiving.com/prismic/assets/jg-startfundraising-website/static/c8151e11-e94e-4d10-bc99-34997041ea51_revealer-crowdfunding-9ff20cae398598abb6fb45597ddf8580.svg)',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '35%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          width: '1000px',
          height:'300px',
          padding: '48px',
          textAlign: 'center',
          marginLeft: '650px'
        }}
      >
        <h2 style={{ marginBottom: '40px' }}>What are you raising money for?</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          <Link to="/my-component" style={{ textDecoration: 'none', color: 'white' }}>
          <button style={{ width: '400px', marginRight: '10px', backgroundColor: '#1667D9', color: 'white' , height:'40px'}}>
              A Charity
          </button>
          </Link>         
          
          <Link to="/2" style={{ textDecoration: 'none', color: 'white' }}>
          <button style={{ width: '400px', backgroundColor: '#1667D9', color: 'white',height:'40px' }}>
              My Own Cause
              </button>
          </Link> 
          
        </div>
        <div style={{ display: 'flex',marginLeft:'10px',marginTop: '10px' }}>
          <div style={{color: 'black' }}>
            <p style={{ marginBottom: '5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '400px' }}>Donations go directly to the charity</p>
            <a href="#" style={{ color: '#1667D9' }}>Find out more!</a>
          </div>
          <div style={{ color: 'black' }}>
            <p style={{ marginBottom: '5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '400px' }}>Donations go directly to your bank account</p>
            <a href="#" style={{ color: '#1667D9' }}>Find out more!</a>
          </div>
        </div>
      </div>
    </div>
  );
};
