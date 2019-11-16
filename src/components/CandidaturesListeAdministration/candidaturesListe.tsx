import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './candidaturesListe.css';
import Candidature from './candidature';

interface IProps {
  formation: string,
  category: number,
  candidaturesListe: any
}

class CandidaturesListe extends React.Component<IProps> {

  render() {
    return (
      <div>
        {
          this.props.candidaturesListe.map((candidature: any) =>   
            <p>
              <Candidature formation={this.props.formation} category={this.props.category} student={candidature} />
            </p>
          )
        }
      </div>
    );
  }
}

export default CandidaturesListe;