import React from 'react';
import pensil from '../../../img/icons/pensil.png';
import '../../../style/home.css';

class MyAppliance extends React.Component {

  render() {
    return (
      <div className="name-mainTitle" >
        <img src={pensil} className="img-icon" alt="polytech" />
        Ma Candidature
      </div>

    );
  }
}

export default MyAppliance;