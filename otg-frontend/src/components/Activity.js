import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import { MDBListGroup,MDBInput,MDBBtn} from 'mdb-react-ui-kit';

import { causeDescription,selectedOption } from './Create';

import React, { useState } from 'react';





export default function Activity() {

 

  return (

   

    <>

   

        <div style={{

      position: 'relative',

      backgroundImage: './Images/background3.png',

      width: '100vh',

      height: '100vh',
marginLeft:"-130px"
    }}>

      <img src="./Images/background3.png">

      </img>

      <PopupComponent/>

    </div>

    </>

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

    backgroundColor: 'rgba(0, 0, 0, 0.5)'

   

  };




  const popupStyle = {

    width: '500px', // Set your desired width

    height: '700px',

    backgroundColor: '#fff',

    padding:"20px",

    borderRadius: '0px',

    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',

    marginTop:'140px'

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

 

  var [imageUrl, setImageUrl] = useState('');

  const handleGenerate = () => {

    var data = {

      "Prompt":"Cause: "+selectedOption

    };




    fetch('http://127.0.0.1:5000/generateimage', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify(data),

    })

      .then(response => response.json())

      .then(responseData => {

        imageUrl=responseData['image_url']

        setImageUrl(imageUrl)

        // Handle the API response

      })

      .catch(error => {

        // Handle any errors

        alert(error)

      });

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




<div alignContent="center">




 <div style={{ height: '333px', width: '592px', textAlign: 'center'}}>

{imageUrl && <img src={imageUrl} alt="Generated Image" style={{ maxHeight: '70%', maxWidth: '50%', marginLeft: "auto", marginRight: "140px", marginTop: "-3px", marginBottom: "auto",

alignSelf:"center" }} />}

 </div>




</div>




</div>

                            {/*  <div style={{height:"230px"}}>

                              <div className="ZkMN-">

                                <div >

                                <div className="image-container">{imageUrl && <img src={imageUrl} alt="Generated Image" />}</div>

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

                              </div> */}

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

                  <div className="row row--no-gutter" style={{display:"flex",marginTop:"20px",height:"20px",width:"700px",alignContent:"center" ,alignItems:"center",paddingTop:"20px"}}>

                    <div className="col-md-6 jg-space-prsm@md jg-space-mbsm jg-space-mbn@md" style={{width:"205px"}}>

                      {/* <input id="imageupload"

                        type="file"

                        class="btn btn-outline-secondary"

                        accept="image/*"  

                                     

                      /> */}

                   <button class="btn btn-outline-secondary" data-mdb-ripple-color="dark" type="button" style={{borderColor:"darkgray",boxShadow:"none",color:"black",borderWidth:"1",width:"220px",padding:"10px",marginLeft:"-10px"}}>

                        Upload a photo

                      </button>

                      <input

                        type="file"                      

                        style={{display: 'none'}} /* Make the file input element invisible */

                      />

                    </div>

                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px"}}>

                      <button class="btn btn-outline-secondary" data-mdb-ripple-color="dark" type="button" style={{borderColor:"darkgray",boxShadow:"none",color:"black",borderWidth:"1",width:"220px",padding:"10px",marginRight:"-90px",marginLeft:"25px"}}>

                        Use one of ours

                      </button>

                    </span>

                    <span className="col-md-6 jg-space-plsm@md" style={{width:"200px"}}>

                     

                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      <footer className="_3oHBN" style={{textAlign:"center",marginTop:"30px"}}>

        <div>

       

        <button onClick = {handleGenerate} type="button" style={{backgroundColor:"#af96d7",marginBottom:"10px",borderRadius:"4px",border:"none",color:"white",marginTop:"10px",padding:"5px"}}>

          Generate using AI

        </button>

        </div>

        <div>

        <button className="jg-btn _1jNyc" style={closeButtonStyle}>Save and continue</button>

        <p className="jg-space-mtmd jg-color--empress jg-text--light" style={{fontSize:"12px",color:"gray",marginTop:"px"}}>

          You can edit this later

        </p>

        </div>

       

       

       

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