import React from 'react';
import '../../../style/home.css';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../../img/fond-student.jpeg';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';
import MyAppliance from './myApplication';
import MyMessages from './myMessages';
import MyInterviews from './myInterviews';
import BottomBar from '../../helpers/bottomBar';
import SoftApplication from '../../../models/application/softApplication';

class StudentHome extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className="d-none d-lg-block col-lg-2 shadow-lg fill" >
            {/* should deal here with burger menu when small*/}
            <StudentNav userImage={user} userName="Romain Planchet" />
          </div>

          <div className="col-sm-12 col-lg-10 fill">
            <div className="image-container">
              <img src={company} className="img-background" alt="polytech" />
              <div className="main-container align-items-end" >
                <div className="row no-gutters" style={{ width: '100%', height: '90%' }}>

                  <div className="col-sm-12 col-lg-9 fill-container no-gutters" style={{ paddingRight: '0%' }}>

                    <div className="row no-gutters" style={{ width: '100%', height: '50%' }}>
                      <div className="col-sm-12 col-lg-6 fill-container" style={{ padding: '0.7%' }}>
                        <div className="fill-container shadow-lg white" style={{ height: '100%'}}>

                          <MyAppliance applications={
                            [new SoftApplication("1", "IG", "Dossier complet"),
                            new SoftApplication("1", "IG", "Dossier complet"),
                            new SoftApplication("1", "IG", "Dossier complet"),
                            new SoftApplication("1", "IG", "Dossier complet"),
                            new SoftApplication("1", "IG", "Dossier complet"),
                            new SoftApplication("1", "IG", "Dossier complet")
                            ]
                          } />


                        </div >
                      </div>
                      <div className="col-sm-12 col-lg-6 fill-container " style={{ padding: '0.7%' }}>
                        <div className="fill-container shadow-lg white" >
                          <MyInterviews />
                        </div>
                      </div>
                    </div>

                    <div className="row no-gutters" style={{ width: '100%', height: '50%' }}>
                      <div className="col-sm-12 col-lg-12 fill-container" style={{ padding: '0.7%' }}>
                        <div className="fill-container shadow-lg white">

                        </div>
                      </div>
                    </div>

                  </div>

                  {/*mail container*/}
                  <div className="col-sm-12 col-lg-3 fill-container" style={{ padding: '0.7%' }}>
                    <div className="fill-container shadow-lg white">
                      <MyMessages />
                    </div>
                  </div>

                </div>

                <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
                  <BottomBar />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>


    );
  }
  //}
}

export default StudentHome;