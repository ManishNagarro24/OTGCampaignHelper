import React,{ useState,useRef} from 'react';
import { MDBListGroup,MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export var selectedOption=""
export var causeDescription=""
var setSelectedOption=""
var setCauseDescription=""


export const Memory = () => {
  [causeDescription, setCauseDescription] = useState('');

  const handleInputChange = (event) => {
    setCauseDescription(event.target.value);
  };

  return (
    <>
    <Header></Header>
    <img src="./Images/getstarted.png" alt="" height="180" width="100%"></img>
      <div id="Page1" className="d-flex p-2 justify-content-center" style={{marginTop:"100px",display:"flex"}}>   
      <MDBListGroup id = "Page1" style={{paddingTop:"-100px",marginTop:"-80px"}} light >
        <h4>We're raising</h4>
      {/* <MDBInput id="Amount" Placeholder="£ 500" style={{height:"80px",width:"500px",marginTop:"10px",marginBottom:"2px"}}/> */}
      <img src="./Images/500o.png" alt="" height="80px" width="100%" style={{border: "0.5px solid",borderRadius:"4px",borderColor:"lightgray"}} ></img>
      <label >You can edit your target later.</label>
      <h4 style={{marginTop:"20px"}}>to</h4>
      <MDBInput
        id="CauseDescription"
        placeholder="help fund a new playground"
        style={{ marginBottom: '2px', height: '100px' }}
        value={causeDescription}
        onChange={handleInputChange}
      />
      <label>You can edit your page title later.</label>
      {MyComponent()}
      
      <p style={{fontSize:"9px",marginTop:"40px"}}>JustGiving has 0% platform fees for donations. All funds
      will go direct to the charity.</p> 
    </MDBListGroup>
    </div>
    <Footer></Footer>
    </>
  )
}
export const MyComponent = () => {
  [selectedOption, setSelectedOption] = useState('Choose a category');
  const inputRef = useRef(null);
  const handleOptionSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/3');
  };

  return (
    <div className="Category" style={{ marginTop: "20px" }}>
      <h6>Category</h6>
      <Dropdown onSelect={handleOptionSelect} >
        <Dropdown.Toggle id="dropdown-toggle" style={{ width: "500px", overflow: "auto", backgroundColor: "white", color: "grey", textAlign: "left", borderColor: "lightgrey" }}>
          {selectedOption}
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ maxHeight: "200px", overflowY: "auto" ,width:"500px"}}>
          <Dropdown.Item eventKey="Animals shelter">Animals shelter</Dropdown.Item>
          <Dropdown.Item eventKey="Business Funding">Business Funding</Dropdown.Item>
          <Dropdown.Item eventKey="Creative arts and culture">Creative arts and culture</Dropdown.Item>
          <Dropdown.Item eventKey="Disability support">Disability support</Dropdown.Item>
          <Dropdown.Item eventKey="Emergencies">Emergencies</Dropdown.Item>
          <Dropdown.Item eventKey="Gardens and environment">Gardens and environment</Dropdown.Item>
          <Dropdown.Item eventKey="Health and medical">Health and medical</Dropdown.Item>
          <Dropdown.Item eventKey="In memory">In memory</Dropdown.Item>
          <Dropdown.Item eventKey="International volunteering">International volunteering</Dropdown.Item>
          <Dropdown.Item eventKey="LGBT+">LGBT+</Dropdown.Item>
          <Dropdown.Item eventKey="Local community">Local community</Dropdown.Item>
          <Dropdown.Item eventKey="Politics">Politics</Dropdown.Item>
          <Dropdown.Item eventKey="Schools and education">Schools and education</Dropdown.Item>
          <Dropdown.Item eventKey="Social welfare">Social welfare</Dropdown.Item>
          <Dropdown.Item eventKey="Sports">Sports</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <MDBBtn onClick={handleContinue} style={{marginTop:"70px",width:"250px",backgroundColor:"lightskyblue",borderColor:"lightgrey"}}>Continue</MDBBtn>   
    </div>

    
  );
};