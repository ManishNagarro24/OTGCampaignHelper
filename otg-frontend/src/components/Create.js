import React,{ useState,useRef} from 'react';
import { MDBListGroup,MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Memory() {
  return (
    <>
    <img src="./Images/getstarted.png" alt="" height="180" width="100%"></img>
      <div id="Page1" className="d-flex p-2 justify-content-center" style={{marginTop:"100px",display:"flex"}}>   
      <MDBListGroup id = "Page1" style={{paddingTop:"-100px",marginTop:"-80px"}} light >
        <h4>We're raising</h4>
      {/* <MDBInput id="Amount" Placeholder="£ 500" style={{height:"80px",width:"500px",marginTop:"10px",marginBottom:"2px"}}/> */}
      <img src="./Images/500o.png" alt="" height="80px" width="100%" style={{border: "0.5px solid",borderRadius:"4px",borderColor:"lightgray"}} ></img>
      <label >You can edit your target later.</label>
      <h4 style={{marginTop:"20px"}}>to</h4>
      <MDBInput id="CauseDescription" placeholder='help fund a new playground' style={{marginBottom:"2px",height:"100px"}}/>
      <label>You can edit your page title later.</label>
      {MyComponent()}
      
      <p style={{fontSize:"9px",marginTop:"40px"}}>JustGiving has 0% platform fees for donations. All funds
      will go direct to the charity.</p> 
    </MDBListGroup>
    </div>
    </>
  )
}
const MyComponent = () => {
  const [selectedOption, setSelectedOption] = useState('Choose a category');
  const inputRef = useRef(null);
  const handleOptionSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };
  const handleContinue = () => {
    // Handle the continue button click event
  };

  return (
    <div class="Category" style={{marginTop:"20px"}}>
      <h6>Category</h6>
      <Dropdown onSelect={handleOptionSelect}>
      <Dropdown.Toggle id="dropdown-toggle" style={{width:"500px",overflow:"auto",backgroundColor:"white",color:"grey",textAlign:"left",borderColor:"lightgrey"}}>
        {selectedOption}
      </Dropdown.Toggle>
      <Dropdown.Menu >        
        <Dropdown.Item eventKey="Option 1" >Option 1</Dropdown.Item>
        <Dropdown.Item eventKey="Option 2" >Option 2</Dropdown.Item>
        <Dropdown.Item eventKey="Option 3" >Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <MDBBtn onClick={handleContinue} style={{marginTop:"70px",width:"250px",backgroundColor:"lightskyblue",borderColor:"lightgrey"}}>Continue</MDBBtn>   
    </div>
    
  );
};
