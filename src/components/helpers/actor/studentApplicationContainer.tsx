import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import BottomBar from '../bottomBar';
import zoomApplication from '../../../img/icons/zoomApplication.png';
import StepsBar from '../stepsBar';

interface IProps {
  title: string,
}
class StudentApplicationContainer extends React.Component<IProps> {

  render() {
    return (

      <div className="main-container align-items-end" >

        <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
          <div className="fill-container shadow-lg white">
            <div className="name-mainTitle" >
              <img src={zoomApplication} className="img-icon" alt="files" />
              {this.props.title}
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

    );
  }
}

export default StudentApplicationContainer;