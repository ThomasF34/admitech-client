import React from 'react';
import ActorNavContainer from '../helpers/actor/actorNavContainer';

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
            ['Candidatures', '/administration/candidatures'],
            ['QCM', '/administration/qcm'],
          ],
          [
            ['Entretiens', '/administration/entretiens']
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

