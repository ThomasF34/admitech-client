import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/actorNav.css';

interface IProps {
  blocList: Array<[string, string]>
}

class ActorNavBloc extends React.Component<IProps> {

  render() {
    return (
      <ul className="decor-line justify-content-md-start" style={{ listStyleType: 'none', paddingLeft: '0%' }}>
        {this.props.blocList.map(e =>
          <li className="nav-item" key={e[1]} >
            <a className="nav-link active" style={{  textDecoration: 'none' ,color: 'white', fontSize: '12px'}} href={e[1]}>
              <h5>{e[0]}</h5>
            </a>
          </li>
        )}
      </ul>
    );
  }
}

export default ActorNavBloc;

