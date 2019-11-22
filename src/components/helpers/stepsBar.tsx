import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { isAdmin } from '../../helpers/authorizationHelper';

interface IProps {
  statusId: number | undefined
}

class StepsBar extends React.Component<IProps> {

  studentMessage = Object.freeze(
    new Map([
      [0, ''],
      [1, 'Candidature à envoyer'],
      [2, 'Candidature en attente de validation par Polytech'],
      [3, 'Dossier à compléter'],
      [4, 'Dossier complet'],
      [5, 'QCM à effectuer'],
      [6, 'QCM en cours d\'évaluation'],
      [7, 'Entretien à programmer'],
      [8, 'Entretien programmé'],
      [9, 'Attente de résultat'],
      [10, 'Admis'],
      [11, 'Refusé']
    ])
  )

  adminMessage = Object.freeze(
    new Map([
      [0, ''],
      [1, 'Candidature brouillon'],
      [2, 'Candidature à valider'],
      [3, 'Dossier à compléter par l\'étudiant'],
      [4, 'Dossier validé'],
      [5, 'QCM à effectuer par l\'étudiant'],
      [6, 'QCM effectué'],
      [7, 'Entretien à programmer par l\'étudiant'],
      [8, 'Entretien programmé'],
      [9, 'Entretien passé'],
      [10, 'Admis'],
      [11, 'Refusé']
    ])
  )
  getActiveStep = (status: number | undefined) => {
    let active = 0
    if (status !== undefined) {
      if (4 < status && status < 7)
        active = 1
      else {
        if (6 < status && status < 9)
          active = 2
        else {
          if (8 < status)
            active = 3
        }
      }
    }
    return active
  }

  getActiveMessage = (activeStep: number | undefined) => {
    let result
    if (activeStep === undefined)
      result = ""
    else result = isAdmin() ? this.adminMessage.get(activeStep) : this.studentMessage.get(activeStep)
    return result
  }

  render() {

    const step = this.getActiveStep(this.props.statusId)
    let allSteps = [{ title: 'Dossier' }, { title: 'QCM' }, { title: 'Entretien' }, { title: 'Résultat' }]
    const message = this.getActiveMessage(this.props.statusId)
    allSteps[step].title = message ? message : ""

    return (
      <div>
        {this.props.statusId ?
          <div>
            <Stepper steps={allSteps}
              activeStep={step}
              activeColor='#49e051'
              completeColor='rgb(0, 204, 255)'
              completeBarColor='rgb(0, 204, 255)'
            />
          </div>
          : null}
      </div>
    );
  }
}

export default StepsBar;

