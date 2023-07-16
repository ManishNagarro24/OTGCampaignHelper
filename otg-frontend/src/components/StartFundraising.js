import React from 'react'
import { MDBListGroup} from 'mdb-react-ui-kit';

export default function Fundraising() {
  return (
    <div id="Page1" className="d-flex p-2 justify-content-center">     
      
      <MDBListGroup id = "Page1" style={{ minWidth: '22rem' }} light>
      <h6 style={{marginBottom:"20px",marginTop:"20px"}}>How much would you like to raise?</h6>
      <p style={{fontSize:"9px",marginTop:"20px"}}>Targets help to set the donors, maximising funds for your selected charity</p>
      {/* <MDBRipple>
        <MDBListGroupItem tag='a' href='/' action noBorders aria-current='true' className='px-3'>
          A birthday          
        </MDBListGroupItem>   
        <MDBListGroupItem tag='a' href='/' action noBorders aria-current='true' className='px-3'>
         A Wedding    
        </MDBListGroupItem>  
        <MDBListGroupItem tag='a' href='/' action noBorders aria-current='true' className='px-3'>
         No occasion    
        </MDBListGroupItem>
      </MDBRipple> */}
      
      <p style={{fontSize:"9px",marginTop:"20px"}}>JustGiving has 0% platform fees for donations. All funds
      will go direct to the charity.</p> 
    </MDBListGroup>
    </div>
  )
}
