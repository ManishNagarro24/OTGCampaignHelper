import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
    } from 'mdb-react-ui-kit';

export default function Header() {
  return (
    <MDBNavbar light bgColor='white' square border border-dark>
        <MDBContainer >
          <MDBNavbarBrand href='/'>
            <img
              id="img1"
              src='../Images/JustGivingLogo.png'
              height='20'
              alt=''
              loading='lazy'
            />
             <img
              id="img2"
              src='../Images/UserLogo.png'
              height='40'
              alt=''
              loading='lazy'
              
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
  )
}