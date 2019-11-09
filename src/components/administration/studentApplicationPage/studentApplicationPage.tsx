import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentApplicationContainer from '../../helpers/actor/studentApplicationContainer';
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
            <StudentApplicationContainer />
          </div>

          <div className="col-sm-12 col-md-2 fill">
            hello
          </div>

        </div>
      </div>

    );
  }
}

export default StudentApplicationPage;