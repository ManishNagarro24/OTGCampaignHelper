import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { MDBListGroup,MDBInput,MDBBtn} from 'mdb-react-ui-kit';

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
    fontSize: '10px',
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
        <div style={{alignItems:"center"}}>
    <div className="_26LpG">
      <div className="_2pASI _9QpxU">
        <section className="_1UAeM jg-background--white">
          <div className="jg-text--center jg-space-ptms jg-space-ptmd@md" style={{textAlign:'center',padding:'10px'}}>
            <span className="jg-text--brand-small" style={{ opacity: 1,color: '#7A04DD'}}>
              1/4
            </span>
            <ButtonWithSymbol/>
          </div>
          <header className="jg-space-mtms jg-space-mbmd jg-text--center" style={{textAlign:'center'}}>
            <p style={{fontSize:"30px",marginTop:"-10px"}}>Add a cover photo</p>
            <p style={{fontSize:"15px",marginTop:"-10px"}}>
              Inspire your supporters with a photo that helps illustrate your cause
            </p>
          </header>
          <div className="jg-space-pbml jg-space-phmd _2JA5v" >
            <div className="_1tu_5">
              <div className="_1xx8B">
                <div>
                  <div>
                    <div className="jg-space-mbmd">
                      <div className="VhevR">
                        <div className="drop">
                          <button type="button" className="c-EQc _1APpp" style={{width:"460px",alignSelf:"center",borderStyle:"dashed",borderWidth:"3px",borderColor:"lightgray"}}>
                            <div style={{height:"230px"}}>
                              <div className="ZkMN-">
                                <div >
                                  <svg viewBox="0 0 99 99" style={{height:"200px",width:"100",textAlign:"center"}}>
                                    <g>
                                      <polygon
                                        fill="#999999"
                                        points="99.026,11.098 87.927,11.098 87.927,0 79.481,0 79.481,11.1 68.384,11.1 68.384,19.545 79.481,19.543 79.481,30.643 87.927,30.643 87.927,19.543 99.026,19.541 "
                                      ></polygon>
                                      <g>
                                        <polygon
                                          fill="#999999"
                                          points="80.753,72.615 6.503,72.615 6.503,18.57 63.353,18.57 63.353,12.066 0,12.066 0,79.117 87.255,79.117 87.255,36.186 80.753,36.186"
                                        ></polygon>
                                        <path
                                          fill="#999999"
                                          d="M63.239,23.645h-1.243H11.695v39.232l14.826-9.841l9.187,5.772l22.304-24.537l2.89,1.182l1.095,1.265l0,0l13.337,15.399V36.718v-0.765V23.645H63.239z M25.867,40.57c-3.409,0-6.298-2.887-6.298-6.299s2.889-6.299,6.298-6.299c3.413,0,6.299,2.887,6.299,6.299S29.28,40.57,25.867,40.57z"
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="jg-text--light jg-space-phsm jg-space-mn" style={{fontSize:"10px",marginTop:"-60px"}}>
                                For best results, your photo should be at least 700px wide and
                                landscape format
                              </p>
                            </div>
                          </button>
                          <input accept="image/*" type="file" style={{ display: 'none' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row row--no-gutter" style={{display:"flex",marginTop:"20px",height:"20px",width:"700px"}}>
                    <div className="col-md-6 jg-space-prsm@md jg-space-mbsm jg-space-mbn@md" style={{width:"205px",boxShadow:"none"}}>
                      <input id="imageupload"
                        type="file"
                        className="jg-hidden qa-file-input"
                        accept="image/*"                        
                      />
                    </div>
                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px"}}>
                      <button className="jg-btn jg-btn--ghost qa-open-gallery" type="button" style={{borderColor:"lightgray",boxShadow:"none"}}>
                        Use one of ours
                      </button>
                    </span>
                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px"}}>
                      <button className="jg-btn jg-btn--ghost qa-open-gallery" type="button" style={{borderColor:"lightgray",boxShadow:"none",marginLeft:"-40px"}}>
                        Generate
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="_3oHBN" style={{textAlign:"center",marginTop:"30px"}}>
        <button className="jg-btn _1jNyc" style={closeButtonStyle}>Save and continue</button>
        <p className="jg-space-mtmd jg-color--empress jg-text--light" style={{fontSize:"15px"}}>
          You can edit this later
        </p>
      </footer>
    </div>
        </div>
      </div>
    </div>
  );
};


const ButtonWithSymbol = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/5'); // Navigate to the "/3" route
  };

  return (
    <span style={containerStyle} onClick={handleNavigation}>
      <span style={symbolStyle}>&gt;</span>
    </span>
  );
};


const containerStyle = {
  display: 'inline-block',
  cursor: 'pointer',
  marginLeft:"2vh"
};

const symbolStyle = {
  fontSize: '24px',
  color: '#7A04DD'
};