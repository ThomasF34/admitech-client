import React from 'react';
import ActorNavContainer from '../helpers/actor/actorNavContainer';
import { refreshToken } from '../../services/oauth2.service';

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

