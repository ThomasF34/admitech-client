import React from 'react';
import ActorNavContainer from '../actorContainer/actorNavContainer';

interface IProps {
  userName: string,
  userImage: string
}

class AdminNav extends React.Component<IProps> {

  render() {
    return (

      <ActorNavContainer
        userName={this.props.userName}
        userImage={this.props.userImage}
        routes={[
          [
            ['Candidatures', '#'],
            ['QCM', '#'],
          ],
          [
            ['Evenements', '#']
          ],
          [
            ['Paramétrage', '#']
          ]
        ]}
      />
    );
  }
}

export default AdminNav;

