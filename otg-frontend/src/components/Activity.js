import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';

export default function Activity() {
  return (
    <div style={{ position: 'relative' }}>
      <h1>This is the Background Component</h1>
      <p>Add your HTML content for the background here...</p>

      {/* PopupComponent */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <PopupComponent />
      </div>
    </div>
    
  )
}
const PopupComponent = () => {
  return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '5px' }}>
        <h2 style={{ fontSize: '20px', color: 'blue' }}>Popup Title</h2>
        <p style={{ fontSize: '16px', color: 'black' }}>
         <div class="
            _2pASI _9QpxU        
          "><section class="_1UAeM jg-background--white"><div class="jg-text--center jg-space-ptms jg-space-ptmd@md"><div class="_350mP"></div><span class="jg-text--brand-small" style={{opacity:"1"}}>1/4</span><button type="button" class="_1HOY9 qa-forward-button ohezf" data-disabled="false"><span >Next step</span></button></div><header class="jg-space-mtms jg-space-mbmd jg-text--center"><h1>Add a cover photo</h1><p class="jg-text--large">Inspire your supporters with a photo that helps illustrate your cause</p></header><div class="jg-space-pbml jg-space-phmd _2JA5v"><div class="_1tu_5"><div class="_1xx8B"><div><div><div class="jg-space-mbmd"><div class="VhevR"><div class="drop"><button type="button" class="c-EQc _1APpp"><div><div class="ZkMN-"><div><svg viewBox="0 0 99 99"><g><polygon fill="#999999" points="99.026,11.098 87.927,11.098 87.927,0 79.481,0 79.481,11.1 68.384,11.1 68.384,19.545 79.481,19.543 79.481,30.643 87.927,30.643 87.927,19.543 99.026,19.541 "></polygon><g><polygon fill="#999999" points="80.753,72.615 6.503,72.615 6.503,18.57 63.353,18.57 63.353,12.066 0,12.066 0,79.117 87.255,79.117 87.255,36.186 80.753,36.186"></polygon><path fill="#999999" d="M63.239,23.645h-1.243H11.695v39.232l14.826-9.841l9.187,5.772l22.304-24.537l2.89,1.182l1.095,1.265l0,0l13.337,15.399V36.718v-0.765V23.645H63.239z M25.867,40.57c-3.409,0-6.298-2.887-6.298-6.299s2.889-6.299,6.298-6.299c3.413,0,6.299,2.887,6.299,6.299S29.28,40.57,25.867,40.57z"></path></g></g></svg></div></div><p class="jg-text--light jg-space-phsm jg-space-mn">For best results, your photo should be at least 700px wide and landscape format</p></div></button><input accept="image/*" type="file" style={{display:"None"}}></input></div></div></div><div class="container-fluid"><div class="row row--no-gutter"><div class="col-md-6 jg-space-prsm@md jg-space-mbsm jg-space-mbn@md"><button class="jg-btn jg-btn--ghost qa-upload-photo" type="button">Upload a photo</button><input type="file" class="jg-hidden qa-file-input" accept="image/*"></input></div><div class="col-md-6 jg-space-plsm@md"><button class="jg-btn jg-btn--ghost qa-open-gallery" type="button">Use one of ours</button></div></div></div></div></div></div><footer class="_3oHBN"><div class="jg-space-mbmd jg-tal"><section><div class="jg-alert jg-alert--error--inline jg-alert--inline" role="alert"><div class="container"><div class="row"><div class="jg-alert__wrapper"><div class="jg-alert__icon jg-alert__icon--error"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .923C18.092.923 23.077 5.908 23.077 12S18.092 23.077 12 23.077.923 18.092.923 12 5.908.923 12 .923zm0 20.215c4.985 0 9.138-4.061 9.138-9.138A9.1 9.1 0 0012 2.862c-4.985 0-9.138 4.061-9.138 9.138A9.1 9.1 0 0012 21.138z"></path><path d="M11.538 16.338h.831v1.2h-.83v-1.2zm-.184-9.6h1.108l-.185 6.37h-.83l-.093-6.37z"></path><path d="M11.354 6.092h1.108c.369 0 .646.277.646.646l-.185 6.37a.631.631 0 01-.646.646h-.83a.631.631 0 01-.647-.646l-.185-6.37c.093-.369.462-.646.739-.646z"></path><circle cx="1.846" cy="1.2" r="1.2" transform="translate(10.154 15.692)"></circle></svg></div><div class="jg-alert__content jg-text--regular">An error has occurred, please try again</div></div></div></div></div></section></div><button class="jg-btn _1jNyc">Save and continue</button><p class="jg-space-mtmd jg-color--empress jg-text--light">You can edit this later</p></footer></div></div></section></div>
        </p>
        <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    </div>
  );
};