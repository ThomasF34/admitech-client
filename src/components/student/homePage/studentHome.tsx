import React from 'react';
import '../../../style/home.css';
import '../../../style/container.css';
import 'bootstrap/dist/css/bootstrap.css';
import user from '../../../img/user.png';
import StudentNav from '../studentNav';
import MyAppliance from './myApplication';
import MyInterviews from './myInterviews';
import BottomBar from '../../helpers/bottomBar';
import SoftApplication from '../../../models/application/softApplication';
import {myApplications } from '../../../services/application.service';
import { removeToken } from '../../../services/token.service';

interface IProps {
}

interface IState {
  applications: SoftApplication[] | null
}

class StudentHome extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      applications: null
    };
  }

  componentDidMount() {
    myApplications()
      .then(res => {
        this.setState({
          applications: res.data.candidatures
        });
      })
      .catch((e) => {
        if(e.response.status===400){
          removeToken()
          window.location.reload()
        }
        this.setState({
          applications: null
        });
        console.log(e)
      })
  }

  render() {
    console.log("load")
    console.log(this.state.applications)
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className=" d-lg-block nav shadow-own fill" >
            {/* should deal here with burger menu when small*/}
            <StudentNav userImage={user} userName="Romain Planchet" />
          </div>

          <div className=" content fill">
            <div className="image-container">
              <div className="main-container align-items-end" >
                <div className="row no-gutters" style={{ width: '100%', height: '90%' }}>

                  <div className="col-sm-12 col-lg-12 fill-container no-gutters" style={{ paddingRight: '0%' }}>

                    <div className="row no-gutters" style={{ width: '100%', height: '50%' }}>
                      <div className="col-sm-12 col-lg-6 fill-container" style={{ padding: '0.7%' }}>
                        <div className="fill-container shadow-own white" style={{ height: '100%' }}>

                          <MyAppliance applications={this.state.applications} />


                        </div >
                      </div>
                      <div className="col-sm-12 col-lg-6 fill-container " style={{ padding: '0.7%' }}>
                        <div className="fill-container shadow-own white" >
                          <MyInterviews />
                        </div>
                      </div>
                    </div>

                    <div className="row no-gutters " style={{ width: '100%', height: '50%' }}>
                      <div className="col-sm-0 col-lg-0 fill-container" style={{ padding: '0.7%' }}>
                        <div className="fill-container shadow-own background-formatech">
                          <h5 className='title-do'>Découvrez la nouvelle formation Dev Ops en alternance</h5>
                          <p className="explications">Cette nouvelle formation proposée par Polytech Montpellier s'oriente autour des nouveaux enjeux numériques de la mise en production d'application à large échelle. Rendez-vous sur notre plateforme Formatech pour en savoir plus.</p>
                          <a href="https://formatech.igpolytech.fr/" target="_blank" rel="noopener noreferrer">
                            <button className="button-pub">Découvrir</button>
                          </a>
                        </div>
                      </div>
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
}

export default StudentHome;