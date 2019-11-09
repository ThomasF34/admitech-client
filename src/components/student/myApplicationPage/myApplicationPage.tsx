import React from 'react';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';
import StudentApplicationContainer from '../../helpers/actor/studentApplicationContainer';

class MyApplicationPage extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className="d-none d-md-block col-md-2 shadow-lg fill" >
            {/* should deal here with burger menu when small*/}
            <StudentNav userImage={user} userName="Romain Planchet" />
          </div>

          <div className="col-sm-12 col-md-10 fill">
            <StudentApplicationContainer />
          </div>

        </div>
      </div>

    );
  }
}

export default MyApplicationPage;