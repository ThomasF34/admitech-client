import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentApplicationContainer from '../../helpers/actor/studentApplicationContainer';
import polytech from '../../../img/fond-polytech.jpeg';
import AdminNav from '../adminNav';

class StudentApplicationPage extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className="d-none d-md-block col-md-2 shadow-lg fill" >
            <AdminNav userImage={user} userName="Membre Polytech" />
          </div>

          <div className="col-sm-12 col-md-8 fill">
            <div className="image-container">
              <img src={polytech} className="img-background" alt="polytech" />
              <StudentApplicationContainer title="Candidature de ?? en ??" />
            </div>
          </div>


          <div className="col-sm-12 col-md-2 fill">
            <div className="fill-container shadow-lg" style={{ backgroundColor: 'rgb(163, 162, 162)' }}>
              <h4 color="white" className="text-center">Détail des étapes</h4>
            </div>
          </div>


        </div>


      </div >


    );
  }
}

export default StudentApplicationPage;