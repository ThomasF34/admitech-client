import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';
import { useParams } from 'react-router-dom';
import StudentApplicationFormContainer from './studentApplicationFormContainer';

function MyApplicationPage() {
  let { id } = useParams();

  return (

    <div className="root fill ">
      <div className="row fill no-gutters">

        <div className="d-none d-md-block col-md-1 fill" >
          <StudentNav userImage={user} userName="Romain Planchet" />
        </div>

        <div className="col-sm-12 col-md-11 fill">
          <StudentApplicationFormContainer idApplication={id} />
        </div>

      </div>
    </div>

  );
}

export default MyApplicationPage;