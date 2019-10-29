import '../style/containerCard.css';
import React from 'react';
import student from '../img/fond-admitech.jpeg';
import Card from './card';


class ContainerCard extends React.Component {
  render() {
    return (


      <div className="root container fill ">
        <div className="row rowCustom align-items-center">
          <div className="col-sm-12 col-md-4 ">
            <Card title="titlee" buttonTitle="bouton" image={student} text="text" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="title" buttonTitle="bouton" image={student} text="text" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Card title="title" buttonTitle="bouton" image={student} text="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerCard;

