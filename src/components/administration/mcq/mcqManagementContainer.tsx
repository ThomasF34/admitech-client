import '../../../style/container.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../../img/fond-polytech.jpeg';
import user from '../../../img/user.png';
import AdminNav from '../adminNav';
import BottomBar from '../../helpers/bottomBar';
import McqPreview from './mcq-management'

class PreviewContainer extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">
            {/* should deal here with burger menu when small*/}
            <AdminNav userImage={user} userName="Membre Polytech" />

          <div className="col-sm-12 col-md-12 fill">
            <div className="image-container">
              <img src={company} className="img-background" alt="polytech" />
              <div className="main-container align-items-end" >

                <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
                  <div className="fill-container shadow-lg white">
                    <div className="name-mainTitle" >
                      Gestion des QCM
                    </div>
                  </div>
                </div>
                <div className="row no-gutters " style={{ width: '100%', height: '80%', padding: '0.7%' }}>
                  <div className="fill-container shadow-lg white">
                    <div className="row fill-container">
                      <div className="container">
                        <McqPreview />
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

export default PreviewContainer;