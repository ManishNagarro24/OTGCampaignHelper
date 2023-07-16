import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';

export default function Memory() {
  return (
    <div id="Page1" className="d-flex p-2 justify-content-center">     
      
      <MDBListGroup id = "Page1" style={{ minWidth: '22rem' }} light>
      <h6 style={{marginBottom:"20px",marginTop:"20px"}}>Are you fundraising in memory of someone?</h6>
      <MDBRipple>
        <MDBListGroupItem tag='a' href='/' action noBorders aria-current='true' className='px-3'>
          Yes          
        </MDBListGroupItem>   
        <MDBListGroupItem tag='a' href='/' action noBorders aria-current='true' className='px-3'>
         No    
        </MDBListGroupItem>  
      </MDBRipple>
      
      <p style={{fontSize:"9px",marginTop:"20px"}}>JustGiving has 0% platform fees for donations. All funds
      will go direct to the charity.</p> 
    </MDBListGroup>
    </div>
  )
}
