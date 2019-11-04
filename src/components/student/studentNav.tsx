import React from 'react';
import ActorNavContainer from '../actor/actorNavContainer';

interface IProps {
  userName: string,
  userImage: string
}

class StudentNav extends React.Component<IProps> {

  render() {
    return (

      <ActorNavContainer
        userName={this.props.userName}
        userImage={this.props.userImage}
        routes={[
          [
            ['Mon compte', '#'],
            ['Mes messages', '#'],
            ['Mes préférences', '#']
          ],
          [
            ['Mes Candidatures', '#'],
            ['Mes Rendez-vous', '#']
          ],
          [
            ['Index des entreprises', '#']
          ]
        ]}
      />
    );
  }
}

export default StudentNav;

