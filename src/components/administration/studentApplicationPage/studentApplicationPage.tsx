import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import AdminNav from '../adminNav';
import { useParams } from 'react-router-dom';
import AdminApplicationFormContainer from './adminApplicationFormContainer';

function StudentApplicationPage() {
  let { id } = useParams();

  return (


    <div className="row fill no-gutters">

      <div className="d-none d-md-block col-md-1 fill" >
        <AdminNav userImage={user} userName="Membre Polytech" />
      </div>

      <div className="col-sm-12 col-md-11">
        <AdminApplicationFormContainer idApplication={id} />
      </div>

    </div>

  );
}


export default StudentApplicationPage;