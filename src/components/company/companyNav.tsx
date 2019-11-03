import React from 'react';
import ActorNavContainer from '../actorContainer/actorNavContainer';

interface IProps {
  userName: string,
  userImage: string
}

class CompanyNav extends React.Component<IProps> {

  render() {
    return (

      <ActorNavContainer
        userName={this.props.userName}
        userImage={this.props.userImage}
        routes={[
          [
            ['Mes Offres', '#'],
          ],
          [
            ['Notifications', '#'],
            ['Mails', '#']
          ],
          [
            ['Evenements', '#']
          ]
        ]}
      />
    );
  }
}

export default CompanyNav;

