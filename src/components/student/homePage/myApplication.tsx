import React from 'react';
import pensil from '../../../img/icons/pensil.png';
import plusButtonSmall from '../../../img/icons/plus32px.png'
import '../../../style/home.css';
import SoftApplication from '../../../models/application/softApplication';
import ApplicationTab from './applicationTab';

interface IProps {
  applications: SoftApplication[] | null,
}

class AddButton extends React.Component {
  render() {
    return (
      <div className="text-center">
      <img src={plusButtonSmall} className="img-icon " alt="button" />
      </div>
    );
  }
}
class MyAppliance extends React.Component<IProps> {

  render() {
    return (
      <div style={{ height: '100%' }}>
        <div className="name-mainTitle" >
          <img src={pensil} className="img-icon" alt="polytech" />
          Mes Candidatures
          <AddButton />
        </div>
        <div className="col" style={{ height: '70%' }}>
          <div className="row align-items-center text-center" style={{ height: '90%' }}>
            <ApplicationTab applications={this.props.applications} />
          </div>

        </div>
      </div>
    );
  }
}

export default MyAppliance;