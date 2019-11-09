import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../../img/fond-student.jpeg';
import BottomBar from '../bottomBar';
import zoomApplication from '../../../img/icons/zoomApplication.png';
import StepsBar from '../stepsBar';

class StudentApplicationContainer extends React.Component {

  render() {
    return (

      <div className="image-container">
        <img src={company} className="img-background" alt="polytech" />
        <div className="main-container align-items-end" >

          <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
            <div className="fill-container shadow-lg white">
              <div className="name-mainTitle" >
                <img src={zoomApplication} className="img-icon" alt="files" />
                Ma Canditature
            </div>
            </div>
          </div>

          <div className="row no-gutters " style={{ width: '100%', height: '80%', padding: '0.7%' }}>
            <div className="fill-container shadow-lg white">
              <div className="row align-items-center">
                <div className="container" >
                  <StepsBar />
                </div>
              </div>
            </div>
          </div>

          <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
            <BottomBar />
          </div>

        </div>
      </div>
    );
  }
}

export default StudentApplicationContainer;