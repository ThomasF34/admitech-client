import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/applications/applicationsList.css';
import Application from './application';
import SingleApplication from '../../../models/singleApplication';

interface IProps {
  formation: string,
  category: number,
  candidaturesListe: any
}

class ApplicationsList extends React.Component<IProps> {

  render() {
    return (
      <div>
        {
          this.props.candidaturesListe.map((candidature: SingleApplication) =>   
            <p>
              <Application formation={this.props.formation} category={this.props.category} application={candidature} />
            </p>
          )
        }
      </div>
    );
  }
}

export default ApplicationsList;