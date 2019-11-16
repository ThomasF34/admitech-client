import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/applications/applicationsList.css';
import Application from './application';

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
          this.props.candidaturesListe.map((candidature: any) =>   
            <p>
              <Application formation={this.props.formation} category={this.props.category} student={candidature} />
            </p>
          )
        }
      </div>
    );
  }
}

export default ApplicationsList;