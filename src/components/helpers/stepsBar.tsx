import React from 'react';
import Stepper from 'react-stepper-horizontal';

class StepsBar extends React.Component {
  render() {
    return (
      <Stepper steps={[{ title: 'Dossier Complet' }, { title: 'QCM' }, { title: 'Prise de RDV entretien' }, { title: 'Entretien' }, { title: 'Résultat' }]}
        activeStep={2}
        activeColor='#49e051'
        completeColor='rgb(0, 204, 255)'
        completeBarColor='rgb(0, 204, 255)'
      />
    );
  }
}

export default StepsBar;

