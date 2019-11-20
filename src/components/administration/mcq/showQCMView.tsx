import '../../../style/container.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import AdminNav from '../adminNav';
import { Link } from 'react-router-dom';
import containerGetQCM from './containerGetGCM'

class ShowQCMView extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className="d-none d-md-block col-md-2 shadow-lg fill" >
            {/* should deal here with burger menu when small*/}
            <AdminNav userImage={user} userName="Membre Polytech" />
          </div>

          <div className="col-sm-12 col-md-10 fill">
            <div className="image-container">
              <div className="main-container" >

                <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
                  <div className="w-100 shadow-lg white">
                    <div className="name-mainTitle" >
                      <Link to={'/administration/qcm/'} style={{ textDecoration: 'none' }}>
                        <button className="btn btn-outline-dark float-left" type="button">Retour</button>
                      </Link>
                      Formulaire de création d'un quizz
                    </div>
                  </div>
                </div>
                <div className="row no-gutters " style={{ width: '100%', height: '80%', padding: '0.7%' }}>
                  <div className="shadow-lg white">
                    <div className="row fill-container">
                      <div className="container">
                        {containerGetQCM()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ShowQCMView;