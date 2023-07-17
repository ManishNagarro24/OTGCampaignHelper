import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';

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
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const popupTitleStyle = {
    fontSize: '20px',
    color: 'blue',
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
        <h2 style={popupTitleStyle}>Popup Title</h2>
        <div>
    <div className="_26LpG">
      <div className="_2pASI _9QpxU">
        <section className="_1UAeM jg-background--white">
          <div className="jg-text--center jg-space-ptms jg-space-ptmd@md">
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
          <header className="jg-space-mtms jg-space-mbmd jg-text--center">
            <h1>Add a cover photo</h1>
            <p className="jg-text--large">
              Inspire your supporters with a photo that helps illustrate your cause
            </p>
          </header>
          <div className="jg-space-pbml jg-space-phmd _2JA5v">
            <div className="_1tu_5">
              <div className="_1xx8B">
                <div>
                  <div>
                    <div className="jg-space-mbmd">
                      <div className="VhevR">
                        <div className="drop">
                          <button type="button" className="c-EQc _1APpp">
                            <div>
                              <div className="ZkMN-">
                                <div>
                                  <svg viewBox="0 0 99 99">
                                    <g>
                                      <polygon
                                        fill="#999999"
                                        points="99.026,11.098 87.927,11.098 87.927,0 79.481,0 79.481,11.1 68.384,11.1 68.384,19.545 79.481,19.543 79.481,30.643 87.927,30.643 87.927,19.543 99.026,19.541 "
                                      ></polygon>
                                      <g>
                                        <polygon
                                          fill="#999999"
                                          points="80.753,72.615 6.503,72.615 6.503,18.57 63.353,18.57 63.353,12.066 0,12.066 0,79.117 87.255,79.117 87.255,36.186 80.753,36.186"
                                        ></polygon>
                                        <path
                                          fill="#999999"
                                          d="M63.239,23.645h-1.243H11.695v39.232l14.826-9.841l9.187,5.772l22.304-24.537l2.89,1.182l1.095,1.265l0,0l13.337,15.399V36.718v-0.765V23.645H63.239z M25.867,40.57c-3.409,0-6.298-2.887-6.298-6.299s2.889-6.299,6.298-6.299c3.413,0,6.299,2.887,6.299,6.299S29.28,40.57,25.867,40.57z"
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="jg-text--light jg-space-phsm jg-space-mn">
                                For best results, your photo should be at least 700px wide and
                                landscape format
                              </p>
                            </div>
                          </button>
                          <input accept="image/*" type="file" style={{ display: 'none' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row row--no-gutter">
                    <div className="col-md-6 jg-space-prsm@md jg-space-mbsm jg-space-mbn@md">
                      <button className="jg-btn jg-btn--ghost qa-upload-photo" type="button">
                        Upload a photo
                      </button>
                      <input
                        type="file"
                        className="jg-hidden qa-file-input"
                        accept="image/*"
                      />
                    </div>
                    <div className="col-md-6 jg-space-plsm@md">
                      <button className="jg-btn jg-btn--ghost qa-open-gallery" type="button">
                        Use one of ours
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="_3oHBN">
        <div className="jg-space-mbmd jg-tal">
          <section>
            <div className="jg-alert jg-alert--error--inline jg-alert--inline" role="alert">
              <div className="container">
                <div className="row">
                  <div className="jg-alert__wrapper">
                    <div className="jg-alert__icon jg-alert__icon--error">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .923C18.092.923 23.077 5.908 23.077 12S18.092 23.077 12 23.077.923 18.092.923 12 5.908.923 12 .923zm0 20.215c4.985 0 9.138-4.061 9.138-9.138A9.1 9.1 0 0012 2.862c-4.985 0-9.138 4.061-9.138 9.138A9.1 9.1 0 0012 21.138z"></path>
                        <path d="M11.538 16.338h.831v1.2h-.83v-1.2zm-.184-9.6h1.108l-.185 6.37h-.83l-.093-6.37z"></path>
                        <path d="M11.354 6.092h1.108c.369 0 .646.277.646.646l-.185 6.37a.631.631 0 01-.646.646h-.83a.631.631 0 01-.647-.646l-.185-6.37c.093-.369.462-.646.739-.646z"></path>
                        <circle cx="1.846" cy="1.2" r="1.2" transform="translate(10.154 15.692)"></circle>
                      </svg>
                    </div>
                    <div className="jg-alert__content jg-text--regular">
                      An error has occurred, please try again
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <button className="jg-btn _1jNyc">Save and continue</button>
        <p className="jg-space-mtmd jg-color--empress jg-text--light">
          You can edit this later
        </p>
      </footer>
    </div>
        </div>
        <button style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
};