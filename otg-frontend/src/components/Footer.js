import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    
    <MDBFooter>
      <div id = "footer" className='text-center p-3' style={{ backgroundColor: 'white' }}>
        © 2023 OTG:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Blackbaud
        </a>
      </div>
    </MDBFooter>
  );
}