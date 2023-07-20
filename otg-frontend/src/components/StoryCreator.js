import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { selectedOption } from './Create';

export default function Activity() {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: './Images/background3.png',
      width: '100%',
      height: '100vh',
      fontStyle:"courier",
      marginLeft:"-130px"
      
    }}>
      <img src="./Images/background3.png">
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
      var [content, setContent] = useState('');

  const handleGenerate = () => {

    var data = {

      "cause":"Cause: "+selectedOption,
      "suggestions":"Suggestions: "+"Highlight the success of this story to motivate people to donate more Try to add phrases like: Keep up the excellent work, Paws of Love!"

    };




    fetch('http://127.0.0.1:5000/generatecontent', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify(data),

    })

      .then(response => response.json())

      .then(responseData => {

        content=responseData['content']

        setContent(content)

        // Handle the API response

      })

      .catch(error => {

        // Handle any errors

        alert(error)

      });

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
      <div className="jg-text--center jg-space-ptms jg-space-ptmd@md" style={{textAlign:'center',padding:'10px',marginLeft:"10px",fontStyle:"courier"}}>
            <ButtonWithSymbol/>            
         
      </div><header class="jg-space-mtms jg-space-mbmd jg-text--center"><p style={{marginLeft:"130px",fontSize:"30px",marginTop:"-10px",fontStyle:"courier"}}>
        <span>Write your story</span></p><p class="jg-text--large" style={{marginTop:"-15px",textAlign:"center",fontStyle:"courier"}}>
        <span style={{fontSize:"14px",fontStyle:"courier"}}>What's the problem you're trying to solve and why do you care about it?</span>
        </p>
        <a type="link" class="c-EQc jg-space-mbsm jg-text--link jg-text--center" style={{marginLeft:"70px",textDecoration:"none",textAlign:"center",fontStyle:"courier"}}><span><p style={{fontSize:"13px",marginTop:"-29px",fontStyle:"courier"}}>Learn more about writing a compelling story</p></span> </a></header><div class="_2JA5v"><div class="jg-space-pbml" style={{fontStyle:"courier"}}><form><div class={{}}><div class="jg-form-group">
          <hr></hr>
      <div style={{overflowY:"scroll",height:"300px"}}class="jg-form-group"><div class="jg-space-psm jg-space-pmd@md jg-relative jg-bd jg-bd--solid jg-bd--very-light-grey" >
        <div data-slate-editor="true" data-key="8" contenteditable="true" class="tP1Ms" spellcheck="true" role="textbox" data-gramm="false" autocomplete="off" autocorrect="off" style={{marginTop:"10px",fontStyle:"courier"}}>
          <p class="jg-text" data-key="7">
            <span data-key="6">
              <span data-offset-key="6-0" style={{fontStyle:"courier"}}>{content}</span>
        </span>
        
        </p></div><div class="_3ieR6 jg-space-mtmd jg-space-mlmd@lg jg-space-ptxs jg-text--large">

        <img alt="" src="./Images/tools_enhance.png" height="50px" width ="340px" style={{zIndex:"1",position:"relative",marginBottom:"-40px"}}></img>

        <button onClick={handleGenerate} type="button" style={{marginTop:"-130px",zIndex:"-1",marginLeft:"350px",backgroundColor:"#af96d7",borderRadius:"4px",border:"none",color:"white",fontStyle:"courier",fontSize:"13px"}}>
                        Generate story using AI
                      </button>
<hr></hr>
     </div></div>
      </div></div></div>
      <footer class="jg-space-phmd jg-tac jg-space-mtml"><div class="row"><div class="col-sm-12"></div>            

        <div className="container-fluid">
                  <div className="row row--no-gutter" style={{display:"flex",marginTop:"20px",height:"20px",width:"700px",fontStyle:"courier"}}>
                   
                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px",fontStyle:"courier"}}>
                      <button id="your-story-continue-btn" class="btn btn-primary" type="submit" style={{borderColor:"lightgray",boxShadow:"none",fontStyle:"courier",marginLeft:"150px",width:"160px"}}>
                        Save and Continue
                      </button>
                    </span>
                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px",fontStyle:"courier"}}>
                     
                    </span>
                  </div>
                  <div>
                  <div class="col-sm-12 jg-text--center"><p class="jg-space-mtms jg-text--light jg-space-mbms" style={{marginLeft:"170px",marginTop:"20px",fontSize:"12px",fontStyle:"courier",color:"gray"}}><span>You can edit this later</span></p></div></div>
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
