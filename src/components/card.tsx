import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface IProps {
  title: string,
  buttonTitle: string,
  text: string,
  image: string
}

class Card extends React.Component<IProps> {

  render() {
    return (

      <div className="root">
        <div className="container">
          <div className="card" style={{ width: '18rem;' }}  >
            <img src={this.props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.text}</p>
              <a href="connexion.tsx" className="btn btn-primary">{this.props.buttonTitle}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

