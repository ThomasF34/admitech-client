import '../../style/container.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../img/fond-student.jpeg';
import user from '../../img/user.png';
import StudentNav from './studentNav';

class StudentHome extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className="d-none d-md-block col-md-2 shadow-lg fill" >
            {/* should deal here with burger menu when small*/}
            <StudentNav userImage={user} userName="Romain Planchet"/>

          </div>

          <div className="col-sm-12 col-md-10 fill">
            <div className="image-container">
              <img src={company} className="img-background" alt="polytech" />
            </div>


          </div>

        </div>
      </div>


    );
  }
}

export default StudentHome;