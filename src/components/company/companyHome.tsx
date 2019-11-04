import '../../style/container.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import company from '../../img/fond-company.jpeg';
import user from '../../img/user.png';
import CompanyNav from './companyNav';

class CompanyHome extends React.Component {

  render() {
    return (

      <div className="root fill ">
        <div className="row fill no-gutters">

          <div className="d-none d-md-block col-md-2 shadow-lg fill" >
            {/* should deal here with burger menu when small*/}
            <CompanyNav userImage={user} userName="Entreprise XXX"/>

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

export default CompanyHome;