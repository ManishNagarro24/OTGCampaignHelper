import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Activity() {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: './Images/Background2.png',
      width: '100%',
      height: '100vh',
      
    }}>
      <img src="./Images/Background2.png">
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
    width: '500px', // Set your desired width
    height: '700px',
    backgroundColor: '#fff',
    padding:"20px",
    borderRadius: '0px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    marginTop:'190px'
    
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

  return (
    <div style={popupContainerStyle}>
      <div style={popupStyle}>
      <div class="_2pASI _9QpxU" >
      <section class="_1UAeM jg-background--white" >
      <div className="jg-text--center jg-space-ptms jg-space-ptmd@md" style={{textAlign:'center',padding:'10px',marginLeft:"10px"}}>
            <ButtonWithSymbol/>            
         
      </div><header class="jg-space-mtms jg-space-mbmd jg-text--center"><p style={{marginLeft:"130px",fontSize:"30px",marginTop:"-10px"}}>
        <span>Write your story</span></p><p class="jg-text--large" style={{marginTop:"-15px",textAlign:"center"}}>
        <span style={{fontSize:"14px"}}>What's the problem you're trying to solve and why do you care about it?</span>
        </p>
        <a type="link" class="c-EQc jg-space-mbsm jg-text--link jg-text--center" style={{marginLeft:"70px",textDecoration:"none",textAlign:"center"}}><span><p style={{fontSize:"13px",marginTop:"-29px"}}>Learn more about writing a compelling story</p></span> </a></header><div class="_2JA5v"><div class="jg-space-pbml" style={{}}><form><div class={{}}><div class="jg-form-group">
          <hr></hr>
      <div class="jg-form-group"><div class="jg-space-psm jg-space-pmd@md jg-relative jg-bd jg-bd--solid jg-bd--very-light-grey" >
        <div data-slate-editor="true" data-key="8" contenteditable="true" class="tP1Ms" spellcheck="true" role="textbox" data-gramm="false" autocomplete="off" autocorrect="off" style={{marginTop:"10px"}}>
          <p class="jg-text" data-key="7">
            <span data-key="6">
              <span data-offset-key="6-0" style={{}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
        </span>
        
        </p></div><div class="_3ieR6 jg-space-mtmd jg-space-mlmd@lg jg-space-ptxs jg-text--large">

        <img alt="" src="./Images/iconcreatestory.png" height="90px" width = "100%" style={{marginLeft:"10px"}}></img>
<hr></hr>
     </div></div>
      </div></div></div>
      <footer class="jg-space-phmd jg-tac jg-space-mtml"><div class="row"><div class="col-sm-12"></div>            

        <div className="container-fluid">
                  <div className="row row--no-gutter" style={{display:"flex",marginTop:"20px",height:"20px",width:"700px"}}>
                   
                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px"}}>
                      <button id="your-story-continue-btn" class="jg-btn btn btn-primary" type="submit" style={{borderColor:"lightgray",boxShadow:"none"}}>
                        Save and Continue
                      </button>
                    </span>
                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px"}}>
                      <button className="jg-btn jg-btn--ghost qa-open-gallery" type="button" style={{borderColor:"lightgray",boxShadow:"none",marginLeft:"130px",marginRight:"-70px",backgroundColor:"#C3B1E1"}}>
                        Re-Generate
                      </button>
                    </span>
                  </div>
                  <div>
                  <div class="col-sm-12 jg-text--center"><p class="jg-space-mtms jg-text--light jg-space-mbms" style={{marginLeft:"8px",marginTop:"25px",fontSize:"14px"}}><span>You can edit this later</span></p></div></div>
                  </div>
                </div>
      </footer>
        </form></div></div></section></div>
       
      </div>
     
    </div>
  );
};
const ButtonWithSymbol = () => {
  const navigate = useNavigate();

  const handleNext = () => {
      navigate('/6'); // Navigate to the "/3" route
  };
  const handleBack = () => {
      navigate('/5'); // Navigate to the "/3" route
  };



  return (
    <span style={containerStyle} >
      <span onClick={handleBack} style={symbolStyleLeft}>&lt;</span>
      <span className="jg-text--brand-small" style={{ opacity: 1 }}>
            3/4
      </span>
      <span onClick={handleNext}style={symbolStyleRight}>&gt;</span>
    </span>
  );
};


const containerStyle = {
  display: 'inline-block',
  cursor: 'pointer',
  marginLeft:"2vh"
};

const symbolStyleLeft = {
  fontSize: '24px',
  color: '#7A04DD',
  marginRight:'20px'
};
const symbolStyleRight = {
  fontSize: '24px',
  color: '#7A04DD',
  marginLeft:'20px'
};
