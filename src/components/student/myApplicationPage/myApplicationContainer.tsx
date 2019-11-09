import React from 'react';
import '../../../style/home.css';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../../img/fond-student.jpeg';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';
import BottomBar from '../../helpers/bottomBar';
import zoomApplication from '../../../img/icons/zoomApplication.png';

class MyApplicationContainer extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className="d-none d-md-block col-md-2 shadow-lg fill" >
            {/* should deal here with burger menu when small*/}
            <StudentNav userImage={user} userName="Romain Planchet" />

          </div>

          <div className="col-sm-12 col-md-10 fill">
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
                    <div className="row fill-container align-items-center">
                      <div className="container">
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
                  <BottomBar />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>


    );
  }
}

export default MyApplicationContainer;