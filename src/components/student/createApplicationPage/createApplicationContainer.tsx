import React from 'react';
import '../../../style/home.css';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';


class CreateApplicationContainer extends React.Component {

  render() {
      return (

        <div className="root fill ">
          <div className="row fill no-gutters">

            <div className="d-none d-md-block col-md-2 shadow-lg fill" >
              {/* should deal here with burger menu when small*/}
              <StudentNav userImage={user} userName="Romain Planchet" />
            </div>
          </div>
        </div>


      );
    }
}

export default CreateApplicationContainer;