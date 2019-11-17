import React from 'react';
import '../../../style/home.css';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../../img/fond-student.jpeg';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';
import BottomBar from '../../helpers/bottomBar';
import CalendarApplicant from './calendarApplicant';

class CalendarPage extends React.Component {
    render() {
        return (
            <div className="root fill ">
                <div className="row fill no-gutters">

                <div className="d-none d-md-block col-md-2 shadow-lg fill">
                {/* should deal here with burger menu when small*/}
                <StudentNav userImage={user} userName="Romain Planchet" />
                </div>

                    <div className="col-sm-12 col-md-10 fill">
                        <div className="image-container">
                            <img src={company} className="img-background" alt="polytech" />
                            <div className="main-container align-items-end">

                                <div className="row no-gutters" style={{ width: '100%', height: '10%', padding: '0.7%' }}>
                                    <div className="fill-container shadow-lg white">
                                        <div className="name-mainTitle">
                                            Vous pouvez choisir un créneau pour votre entretien.
                                        </div>
                                    </div>
                                </div>

                                <div className="row no-gutters " style={{ padding: '0.7%' }}>
                                    <div className="fill-container shadow-lg white">
                                        <CalendarApplicant />
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
        )
    }
}

export default CalendarPage;