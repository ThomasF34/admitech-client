import React from 'react';
import chat from '../../img/icons/chat.png';
import '../../style/home.css';

class MyMessages extends React.Component {

  render() {
    return (
      <div className="name-mainTitle" >
        <img src={chat} className="img-icon" alt="polytech" />
        Mes messages
      </div>

    );
  }
}

export default MyMessages;