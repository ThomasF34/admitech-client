import React from 'react';
import clock from '../../img/icons/clock.png';
import '../../style/home.css';

class MyInterviews extends React.Component {

  render() {
    return (
      <div className="name-mainTitle" >
        <img src={clock} className="img-icon" alt="polytech" />
        Mes Rendez-vous
        </div>

    );
  }
}

export default MyInterviews;