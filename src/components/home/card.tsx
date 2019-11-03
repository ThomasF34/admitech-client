import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface IProps {
  title: string,
  clickLink: string,
  text: string,
  image: string
}

class Card extends React.Component<IProps> {

  render() {
    return (

      <div className="root">
        <div className="container">
          <a href={this.props.clickLink} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ width: '18rem;' }}  >
              <img src={this.props.image} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h2 className="card-title text-dark">{this.props.title}</h2>
                <h5 className="card-text text-dark">{this.props.text}</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
