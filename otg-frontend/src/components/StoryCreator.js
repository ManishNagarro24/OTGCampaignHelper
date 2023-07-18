import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

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

  return (
    <div style={popupContainerStyle}>
      <div style={popupStyle}>
      <div class="_2pASI _9QpxU">
      <section class="_1UAeM jg-background--white">
      <div class="jg-text--center jg-space-ptms jg-space-ptmd@md">
      <button type="button" class="_1HOY9 qa-back-button _3blyK" data-disabled="false"><span style={{}}>Previous step</span></button><span class="jg-text--brand-small" style={{}}>2/4</span><button type="button" class="_1HOY9 qa-forward-button ohezf" data-disabled="false"><span style={{}}>Next step</span></button>
      </div><header class="jg-space-mtms jg-space-mbmd jg-text--center"><h1><span>Write your story</span></h1><p class="jg-text--large"><span>What's the problem you're trying to solve and why do you care about it?</span></p><button type="button" class="c-EQc jg-space-mbsm jg-text--link jg-text--center"><span>Learn more about writing a compelling story</span> </button></header><div class="_2JA5v"><div class="jg-space-pbml" style={{}}><form><div class={{}}><div class="jg-form-group">
      <div class="jg-form-group"><div class="jg-space-psm jg-space-pmd@md jg-relative jg-bd jg-bd--solid jg-bd--very-light-grey"><div data-slate-editor="true" data-key="8" contenteditable="true" class="tP1Ms" spellcheck="true" role="textbox" data-gramm="false" autocomplete="off" autocorrect="off" style={{}}><p class="jg-text" data-key="7"><span data-key="6"><span data-offset-key="6-0">asxascSAC</span></span></p></div><div class="_3ieR6 jg-space-mtmd jg-space-mlmd@lg jg-space-ptxs jg-text--large"><div class="BPIlG jg-display-i"><button type="button" class="_1HOY9 undefined"><div class="y72rJ"><div class="DwlRO jg-text--small-light">Title</div>
      <div class="jg-icon--medium-small ZBaha">
        <input></input>
      </div></div></button></div>
      <div class="BPIlG jg-display-i"><button type="button" class="_1HOY9 undefined"><div class="y72rJ"><div class="DwlRO jg-text--small-light">Quote</div><div class="jg-icon--medium-small ZBaha">
        <input></input>
      </div></div></button></div><div class="jg-display-i BPIlG"><button type="button" class="_1HOY9 undefined" data-disabled="false"><div class="y72rJ"><div class="DwlRO jg-text--small-light">Insert link</div><div class="jg-icon--medium-small ZBaha"><svg viewBox="0 0 17 17"><g stroke-width="1" fill-rule="evenodd"><g transform="translate(-202.000000, -22.000000)"><g transform="translate(32.000000, 22.000000)"><g transform="translate(170.000000, 0.000000)">
      <g transform="translate(0.235565, 0.000000)"><g stroke-width="0.5"><g transform="translate(0.089874, 0.089874)"><path d="M8.71461464,11.521016 C7.68067731,11.521016 6.72059264,11.1517526 5.90821331,10.3393733 C5.76050798,10.191668 5.61280265,9.97010997 5.46509732,9.82240463 C5.24353932,9.4531413 5.31739198,9.0100253 5.68665531,8.7884673 C6.05591865,8.56690931 6.49903465,8.64076197 6.72059264,9.0100253 C6.79444531,9.15773064 6.86829798,9.2315833 7.01600331,9.37928864 C7.97608797,10.3393733 9.52699397,10.3393733 10.413226,9.37928864 L14.0320066,5.76050798 C14.9920913,4.80042332 14.9920913,3.24951732 14.0320066,2.36328533 C13.071922,1.40320066 11.521016,1.40320066 10.634784,2.36328533 L9.15773064,3.84033865 C8.86231997,4.13574932 8.41920397,4.13574932 8.12379331,3.84033865 C7.82838264,3.54492799 7.82838264,3.10181199 8.12379331,2.80640132 L9.60084664,1.329348 C11.1517526,-0.221557999 13.6627433,-0.221557999 15.1397966,1.329348 C16.6907026,2.88025399 16.6907026,5.39124465 15.1397966,6.86829798 L11.521016,10.4870786 C10.7086366,11.1517526 9.74855197,11.521016 8.71461464,11.521016 L8.71461464,11.521016 Z"></path><path d="
      "></path></g></g></g></g></g></g></g></svg></div></div></button></div>
      <div class="BPIlG jg-display-i"><button type="button" class="_1HOY9 undefined"><div class="y72rJ"><div class="DwlRO jg-text--small-light">Add image</div><div class="ZBaha jg-icon--medium-small"><svg viewBox="0 0 22 18"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-286.000000, -22.000000)"><g transform="translate(32.000000, 22.000000)">
      <g transform="translate(254.000000, 0.000000)"><g><path d="M21.2631952,17.9317799 L0.669112395,17.9317799 C0.304615353,17.9317799 0.0312425723,17.6664795 0.0312425723,17.3127457 L0.0312425723,0.687254354 C0.0312425723,0.333520502 0.304615353,0.0682201051 0.669112395,0.0682201051 L21.2631952,0.0682201051 C21.6276923,0.0682201051 21.9010651,0.333520502 21.9010651,0.687254354 L21.9010651,17.3127457 C21.9010651,17.6664795 21.6276923,17.9317799 21.2631952,17.9317799 L21.2631952,17.9317799 Z M2.30934908,16.0746772 L19.9874556,16.0746772 L19.9874556,2.27905672 C19.9874556,2.10218979 19.8052071,1.92532286 19.6229586,1.92532286 L2.21822482,1.92532286 C2.0359763,1.92532286 1.85372778,2.10218979 1.85372778,2.27905672 L1.85372778,15.7209433 C1.94485204,15.8978102 2.12710056,16.0746772 2.30934908,16.0746772 L2.30934908,16.0746772 Z" id="Shape" fill-rule="nonzero">
      </path><path d="M18.6205917,16.9590118 L14.0643786,12.4489051 C13.9732544,12.3604716 13.6998816,12.3604716 13.6087574,12.4489051 L11.4217751,14.6597417 C11.1484023,14.9250421 10.7839053,14.9250421 10.5105325,14.6597417 L6.13656802,10.326502 C6.04544375,10.2380685 5.77207097,10.2380685 5.68094672,10.326502 L2.21822482,13.8638406 C1.94485204,14.1291409 1.580355,14.1291409 1.30698221,13.8638406 L0.851360914,13.4216732 C0.577988135,13.1563728 0.577988135,12.8026389 0.851360914,12.5373386 L5.4986982,7.93879844 C5.77207097,7.67349801 6.13656802,7.67349801 6.4099408,7.93879844 L10.5105325,12.0067378 C10.7839053,12.2720382 11.1484023,12.2720382 11.4217751,12.0067378 L13.4265088,10.0612016 C13.6998816,9.7959012 14.0643786,9.7959012 14.3377515,10.0612016 L19.9874556,15.7209433 C20.2608284,15.9862437 20.2608284,16.3399775 19.9874556,16.6052779 L19.5318343,17.0474453 C19.2584615,17.2243122 18.8939645,17.2243122 18.6205917,16.9590118 L18.6205917,16.9590118 Z" id="Shape" fill-rule="nonzero"></path><path d="M15.1578698,5.02049411 C15.7046154,4.48989332 16.7069822,4.48989332 17.2537278,5.02049411 C17.8004733,5.5510949 17.8004733,6.52386298 17.2537278,7.05446376 C16.7069822,7.58506461 15.7046154,7.58506461 15.1578698,7.05446376 C14.6111242,6.52386298 14.6111242,5.5510949 15.1578698,5.02049411 L15.1578698,5.02049411 Z" id="Shape" fill-rule="nonzero"></path></g></g></g></g></g></svg></div></div></button><input type="file" class="jg-hidden qa-file-input" accept="image/*"></input></div><div class="BPIlG jg-display-i"><button type="button" class="_1HOY9 undefined"><div class="y72rJ"><div class="DwlRO jg-text--small-light">Add video</div><div class="ZBaha jg-icon--medium-small"><svg viewBox="0 0 23 18"><g stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-373.000000, -22.000000)">
      <g transform="translate(32.000000, 22.000000)"><g transform="translate(341.000000, 0.000000)"><g transform="translate(1.045455, 1.000000)"><path d="M20.7079256,3.4496276 C20.7079256,3.4496276 20.5011335,1.88161505 19.8750132,1.19168953 C19.0823104,0.288514308 18.1862115,0.282242258 17.7783716,0.232065857 C14.8545619,0 10.4659752,0 10.4659752,0 L10.4544867,0 C10.4544867,0 6.06589998,0 3.13634601,0.232065857 C2.72850615,0.282242258 1.83815151,0.288514308 1.03970445,1.19796158 C0.41358409,1.8878871 0.206792045,3.45589965 0.206792045,3.45589965 C0.206792045,3.45589965 0,5.29361035 0,7.1375931 L0,8.8624069 C0,10.7001176 0.206792045,12.5441004 0.206792045,12.5441004 C0.206792045,12.5441004 0.41358409,14.1121129 1.03970445,14.8020384 C1.83240729,15.7052136 2.87785596,15.6801254 3.34313806,15.7742062 C5.01470709,15.9498236 10.4544867,16 10.4544867,16 C10.4544867,16 14.8488177,15.9937279 17.7726274,15.7616621 C18.1804673,15.7114857 19.0708219,15.7052136 19.869269,14.7957664 C20.4953893,14.1058408 20.7021814,12.5378283 20.7021814,12.5378283 C20.7021814,12.5378283 20.9089734,10.7001176 20.9089734,8.85613485 L20.9089734,7.13132105 C20.9147176,5.2873383 20.7079256,3.4496276 20.7079256,3.4496276" stroke-width="1.8" fill-rule="nonzero"></path><path d="M9.0111435,11.5083553 C8.94369482,11.5083553 8.87624613,11.5083553 8.80879745,11.4764492 C8.67390009,11.4126371 8.57272707,11.2531066 8.57272707,11.0935762 L8.57272707,4.93570151 C8.57272707,4.77617108 8.67390009,4.61664064 8.80879745,4.55282847 C8.94369482,4.4890163 9.11231652,4.4890163 9.24721388,4.58473456 L13.5639294,7.61581277 C13.6988268,7.71153103 13.7999998,7.87106146 13.7999998,8.03059189 C13.7999998,8.19012233 13.7325511,8.34965276 13.5639294,8.44537102 L9.24721388,11.4764492 C9.1797652,11.4764492 9.07859218,11.5083553 9.0111435,11.5083553 L9.0111435,11.5083553 Z M9.21348954,5.31857455 L9.21348954,10.6787971 L13.02434,7.99868581 L9.21348954,5.31857455 L9.21348954,5.31857455 Z" fill="#999999"></path></g></g></g></g></g></svg></div></div></button></div></div></div>
      <div class="jg-space-phms"><div></div></div></div></div></div><footer class="jg-space-phmd jg-tac jg-space-mtml"><div class="row"><div class="col-sm-12"></div><div class="col-md-6 offset-md-3 col-sm-12"><button id="your-story-continue-btn" class="jg-btn" type="submit">Save and continue</button></div><div class="col-sm-12 jg-text--center"><p class="jg-space-mtms jg-text--light jg-space-mbms"><span>You can edit this later</span></p></div></div></footer></form></div></div></section></div>
       
      </div>
    </div>
  );
};
