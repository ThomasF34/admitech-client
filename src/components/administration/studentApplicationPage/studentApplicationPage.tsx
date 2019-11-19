import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentApplicationContainer from '../../helpers/actor/studentApplicationContainer';
import AdminNav from '../adminNav';
import { useParams } from 'react-router-dom';

function StudentApplicationPage() {
  let { id } = useParams();

  return (

    <div className="root fill ">
      <div className="row fill no-gutters">

        <div className="d-none d-md-block col-md-2 shadow-lg fill" >
          <AdminNav userImage={user} userName="Membre Polytech" />
        </div>

        <div className="col-sm-12 col-md-8 fill">
          <StudentApplicationContainer title="Candidature de ??" id={id} />
        </div>

        <div className="col-sm-12 col-md-2 fill">
          <div className="fill-container shadow-lg" style={{ backgroundColor: 'rgb(163, 162, 162)' }}>
            <h4 color="white" className="text-center">Détail des étapes</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
  

export default StudentApplicationPage;