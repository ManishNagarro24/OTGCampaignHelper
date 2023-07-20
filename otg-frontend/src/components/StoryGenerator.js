import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import React ,{ useState,useRef} from 'react';
import { MDBListGroup,MDBInput,MDBBtn} from 'mdb-react-ui-kit';
export var selectedOption=""
export var causeDescription=""
var setSelectedOption=""
var setCauseDescription=""

export default function Activity() {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: './Images/background3.png',
      width: '100%%',
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
    
      [selectedOption, setSelectedOption] = useState('Language');
      const handleOptionSelect = (eventKey) => {
        setSelectedOption(eventKey);
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
    marginTop:'110px'
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
        <div style={{alignItems:"center",fontStyle:"courier"}}>
    <div className="_26LpG" >
      <div className="_2pASI _9QpxU">
        <section className="_1UAeM jg-background--white">
          <div className="jg-text--center jg-space-ptms jg-space-ptmd@md" style={{textAlign:'center',padding:'10px',marginLeft:"10px",fontStyle:"courier"}}>
            <ButtonWithSymbol/>            
          </div>
          <header className="jg-space-mtms jg-space-mbmd jg-text--center" style={{textAlign:'center',fontSize:"30px",marginTop:"-10px",fontStyle:"courier"}}>
            <p>Create your story</p>
          </header>
          <div>
            <label style={{fontSize:"13px",marginTop:"-10px",marginBottom:"10px",textAlign:"justify",fontStyle:"courier"}}>Our cause-driven fundraiser story has effectively gathered an astounding $40 billion in donations. It is noteworthy that 50% of the stories managed to accomplish their fundraising targets.</label>
                    </div>
          <div className="jg-space-pbml jg-space-phmd _2JA5v" style={{height:"200px",fontStyle:"courier"}}>
            <div className="_1tu_5" style={{height:"100%",fontStyle:"courier"}}>
              <div className="_1xx8B" style={{height:"100%",fontStyle:"courier"}}>
                    <SectionComponent/>                               
                </div>
              </div>   
            </div>
            <p className="jg-text--light jg-space-phsm jg-space-mn" style={{fontSize:"14px",marginBottom:"-2px",fontStyle:"courier"}}>
            Please provide additional information to enhance this story.
                </p>   
          <div style={{ display: 'flex', marginBottom: '10px', height:"50px",fontStyle:"courier"}}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              style={{ flex: '1', padding: '2px' ,borderColor:"lightGray",borderRadius:"6px",fontStyle:"courier"}}
            />
          </div>
          <Dropdown onSelect={handleOptionSelect}>
        <Dropdown.Toggle id="dropdown-toggle2" style={{ width: "100px", overflow: "auto", backgroundColor: "white", color: "white", textAlign: "left", borderColor: "lightgrey" ,marginTop:"7px",borderRadius:"9px",backgroundColor:"#af96d7",fontStyle:"courier",marginLeft:"10px"}}>
          {selectedOption}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" ,width:"80px",fontStyle:"courier"}}>
          <Dropdown.Item eventKey="Spanish">Spanish</Dropdown.Item>
          <Dropdown.Item eventKey="French">French</Dropdown.Item>
          <Dropdown.Item eventKey="Arabic">Arabic</Dropdown.Item>
          <Dropdown.Item eventKey="English">English</Dropdown.Item>                    
        </Dropdown.Menu>
      </Dropdown>
          <button onClick={handleGenerateClick} style={{borderColor:"lightGray" ,backgroundColor:"#af96d7",borderRadius:"9px",marginLeft:"300px",fontStyle:"courier",marginTop:"-65px"}} class="btn btn-secondary">Generate using AI</button>
         
        </section>
      </div>
      <footer className="_3oHBN" style={{textAlign:"center",marginTop:"-5px",fontStyle:"courier"}}>
        <button className="jg-btn _1jNyc" style={closeButtonStyle}>Save and continue</button>
        <p className="jg-space-mtmd jg-color--empress jg-text--light" style={{fontSize:"12px",fontStyle:"courier",color:"gray"}}>
          You can edit this later
        </p>
      </footer>
    </div>
        </div>
      </div>
    </div>
  );
};
const SectionComponent = () => {
    const [expandedSections, setExpandedSections] = useState([]);
    
    const handleSectionClick = (index) => {
      if (expandedSections.includes(index)) {
        setExpandedSections(expandedSections.filter((item) => item !== index));
      } else {
        setExpandedSections([...expandedSections, index]);
      }
    };
  
    const sectionData = [
      { label: 'Suggestion1', content: 'Content 1' },
      { label: 'Suggestion2', content: 'Content 2' },
      { label: 'Suggestion3', content: 'Content 3' },
      { label: 'Tone Suggestion', content: 'Content 3' }
      // Add more sections as needed
    ];
  
    const containerStyle = {
      width: '100%',
      height: '90%',
      overflowY: 'scroll',
      border: '1px solid #ccc',
      padding: '10px',
    };
  
    const sectionStyle = {
      height:"30px",
      marginBottom: '10px',
      backgroundColor: "#f0ebf7",
      cursor: 'pointer',
      padding:"3px",
      borderRadius:"6px",
      borderColor:"#997acc",
      fontSize:"12px"
      
    };
  
    const sectionContentStyle = {
      display: 'none',
      marginTop: '10px'
      
    
    };
  
    const downArrowStyle = {
      float: 'right',
      transform: 'rotate(90deg)',
      transition: 'transform 0.2s ease',
    };
  
    const expandedDownArrowStyle = {
      ...downArrowStyle,
      transform: 'rotate(0deg)',
    };
  
    return (
      <div style={containerStyle}>
       <label style={{fontSize:"13px",marginTop:"2px",marginBottom:"10px",textAlign:"center",fontWeight:"bold",color:"#6f45b4",fontStyle:"courier"}}>Statistics demonstrate successful stories incorporating these suggestions. Choose from below to achieve your goals.</label>
  
        {sectionData.map((section, index) => (
          <div
            key={index}
            style={sectionStyle}
            onClick={() => handleSectionClick(index)}
          >
            <div>
              {section.label}
              <span style={expandedSections.includes(index) ? expandedDownArrowStyle : downArrowStyle}>
                &#9662;
              </span>
            </div>
            {expandedSections.includes(index) && (
              <div style={sectionContentStyle}>{section.content}</div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const ButtonWithSymbol = () => {
    const navigate = useNavigate();
   
    const handleNext = () => {
        navigate('/6'); // Navigate to the "/3" route
    };
    const handleBack = () => {
        navigate('/3'); // Navigate to the "/3" route
    };


  
    return (
      <span style={containerStyle} >
        <span onClick={handleBack} style={symbolStyleLeft}>&lt;</span>
        <span className="jg-text--brand-small" style={{ opacity: 1 }}>
              2/4
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
  