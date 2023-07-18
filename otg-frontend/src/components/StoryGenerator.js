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
        <div style={{alignItems:"center"}}>
    <div className="_26LpG" >
      <div className="_2pASI _9QpxU">
        <section className="_1UAeM jg-background--white">
          <div className="jg-text--center jg-space-ptms jg-space-ptmd@md" style={{textAlign:'center',padding:'10px'}}>
            <div className="_350mP"></div>
            <span className="jg-text--brand-small" style={{ opacity: 1 }}>
              1/4
            </span>
            <button
              type="button"
              className="_1HOY9 qa-forward-button ohezf"
              data-disabled="false"
            >
              <span style={{ visibility: 'visible', opacity: 1 }}>Next step</span>
            </button>
          </div>
          <header className="jg-space-mtms jg-space-mbmd jg-text--center" style={{textAlign:'center'}}>
            <h1>Create your story</h1>
          </header>
          <div>
            <label>Our previous fundraiser story based on your cause has generated donations worth $ 40 billion.50% of the stories were able to meet the goal.</label>
          </div>
          <div className="jg-space-pbml jg-space-phmd _2JA5v" style={{height:"200px"}}>
            <div className="_1tu_5" style={{height:"100%"}}>
              <div className="_1xx8B" style={{height:"100%"}}>
                    <SectionComponent/>                               
                </div>
              </div>   
            </div>
            <p className="jg-text--light jg-space-phsm jg-space-mn">
                Tell us what more to be added to this story
                </p>   
          <div style={{ display: 'flex', marginBottom: '10px', height:"80px" }}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              style={{ flex: '1', marginRight: '10px', padding: '5px' }}
            />
          </div>
          <button onClick={handleGenerateClick}>Generate</button>
        </section>
      </div>
      <footer className="_3oHBN" style={{textAlign:"center",marginTop:"20px"}}>
        <button className="jg-btn _1jNyc" style={closeButtonStyle}>Save and continue</button>
        <p className="jg-space-mtmd jg-color--empress jg-text--light">
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
      { label: 'Tone Suggestion', content: 'Content 3' },
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
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
    };
  
    const sectionContentStyle = {
      display: 'none',
      marginTop: '10px',
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
        <p className="jg-text--large">
              Here are few suggestions you can include in the story
            </p>
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
  