import React from 'react';
import '../../../style/home.css';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';
import CreateApplicationForm from './createApplicationForm';

function CreateApplicationContainer() {

  return (

    <div className="root fill ">
      <div className="row fill no-gutters">

          <StudentNav userImage={user} userName="Romain Planchet" />

        <div className="col-sm-12 col-md-12 fill" >
          <div className="main-container" >
           
            <div className="row" >
              <CreateApplicationForm editMode={true} values={{}} />
            </div>
          </div>
        </div>

      </div>
    </div>


  );
}

export default CreateApplicationContainer;