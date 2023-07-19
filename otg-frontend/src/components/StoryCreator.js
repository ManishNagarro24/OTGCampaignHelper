import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Activity() {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: './Images/BackGround.png',
      width: '100%',
      height: '100vh',
    }}>
      <img src="./Images/BackGround.png">
      </img>
      <PopupComponent/> 
    </div>
    
  )
}

const PopupComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      const handleGenerateClick = () => {
        // Handle generate button click logic here
        console.log('Generated:', inputValue);
      };
  const popupContainerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '9999',
  };

  const popupStyle = {
    width: '700px', // Set your desired width
    height: '85%',
    backgroundColor: '#fff',
    padding:"45px",
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const popupTitleStyle = {
    fontSize: '20px',
    color: 'blue',
    alignItems:'center',
    textAlign:'center'
  };

  const popupContentStyle = {
    fontSize: '16px',
    color: 'black',
  };

  const closeButtonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/3'); // Navigate to the "/3" route
  };

  return (
    <div style={popupContainerStyle}>
      <div style={popupStyle}>
      <div class="_2pASI _9QpxU" >
      <section class="_1UAeM jg-background--white" >
      <div class="jg-text--center jg-space-ptms jg-space-ptmd@md">
      <button type="button" onClick={handleBack} class="_1HOY9 qa-back-button _3blyK" data-disabled="false"><span style={{}}>Previous step</span></button><span class="jg-text--brand-small" style={{}}>2/4</span><button type="button" class="_1HOY9 qa-forward-button ohezf" data-disabled="false"><span style={{}}>Next step</span></button>
      </div><header class="jg-space-mtms jg-space-mbmd jg-text--center"><h1 style={{marginLeft:"80px"}}><span>Write your story</span></h1><p class="jg-text--large"><span>What's the problem you're trying to solve and why do you care about it?</span></p><a type="link" class="c-EQc jg-space-mbsm jg-text--link jg-text--center" style={{margin:"10%",textDecoration:"none"}}><span>Learn more about writing a compelling story</span> </a></header><div class="_2JA5v"><div class="jg-space-pbml" style={{}}><form><div class={{}}><div class="jg-form-group">
      <div class="jg-form-group"><div class="jg-space-psm jg-space-pmd@md jg-relative jg-bd jg-bd--solid jg-bd--very-light-grey" ><div data-slate-editor="true" data-key="8" contenteditable="true" class="tP1Ms" spellcheck="true" role="textbox" data-gramm="false" autocomplete="off" autocorrect="off" style={{marginTop:"10px"}}><p class="jg-text" data-key="7"><span data-key="6"><span data-offset-key="6-0" style={{}}>Write your story here..</span></span></p></div><div class="_3ieR6 jg-space-mtmd jg-space-mlmd@lg jg-space-ptxs jg-text--large">

        <img alt="" src="./Images/iconcreatestory.png" height="130px" width = "100%" style={{marginLeft:"-40px"}}></img>

      <div class="BPIlG jg-display-i"><button type="button" class="_1HOY9 undefined"><div class="y72rJ">       
      </div></button></div></div></div>
      </div></div></div><footer class="jg-space-phmd jg-tac jg-space-mtml"><div class="row"><div class="col-sm-12"></div><div class="col-md-6 offset-md-3 col-sm-12"><button id="your-story-continue-btn" class="jg-btn btn btn-primary" type="submit">Save and continue</button></div><div class="col-sm-12 jg-text--center"><p class="jg-space-mtms jg-text--light jg-space-mbms" style={{marginLeft:"155px"}}><span>You can edit this later</span></p></div></div></footer></form></div></div></section></div>
       
      </div>
    </div>
  );
};
