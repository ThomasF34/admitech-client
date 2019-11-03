import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface IProps {
  blocList: Array<[string, string]>
}

class ActorNavBloc extends React.Component<IProps> {

  render() {
    return (
      <ul>
        {this.props.blocList.map(e =>
          <li className="nav-item" key={'key'}>
            <a className="nav-link active" href={e[1]}>{e[0]}</a>
          </li>
        )}
      </ul>
    );
  }
}

export default ActorNavBloc;

