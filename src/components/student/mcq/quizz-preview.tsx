import React from 'react';
import Question from './question';
import Response from '../../../models/mcq/response.model';
import QuestionModel from '../../../models/mcq/question.model';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mcq from '../../../models/mcq/mcq.model';
import {getQCMStudent, sendQCMStudent} from '../../../services/qcm.service'

interface IState {
  answersCatched: { idQuestion: number, answers: number[] }[];
  finished: boolean;
  mcq : Mcq
}

interface IProps {
  idCandidature: number;
  idCandidat: number;
}

class Quizz extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      answersCatched: [],
      finished: false,
      mcq : new Mcq()
    }
    this.handleAnswers = this.handleAnswers.bind(this);
    this.validateAnswers = this.validateAnswers.bind(this);

  }

   componentDidMount() {
     const pageContent = getQCMStudent(this.props.idCandidature);
     console.log(pageContent)
     pageContent.then((allElements) => {
       if (allElements !== undefined) {
         this.setState({ mcq: allElements })
       } else {
         window.alert("Une erreur s'est produite, veuillez réessayer plus tard")
       }
     }); 
    }

  handleAnswers(answer: { idQuestion: number, answers: number[] }) {
    const res = this.state.answersCatched.concat(answer)
    this.setState({ answersCatched: res })
  }

  validateAnswers() {
    this.setState({ finished: true })
    console.log({
      idCandidature: this.props.idCandidature,
      questions: this.state.answersCatched
    })
    sendQCMStudent({
      idCandidature: this.props.idCandidature,
      questions: this.state.answersCatched
    })
    // Renvoyer la réponse
  }


  render() {
    if (!this.state.finished) {
      return (
        <div className="container w-70">
          {
           this.state.mcq.questions === undefined ?
                <h5>Loading</h5>
            :
              this.state.mcq.questions.map(elem =>
                <Question question={elem} sendResponse={this.handleAnswers} />
              )
            }
          
          <div>
            <p className="information"></p>
            <div className="text-center mb-5">
              <button className="btn btn-sm btn-outline-secondary center-block mx-auto" onClick={this.validateAnswers}>Envoyez mes réponses</button>
            </div>
          </div>
        </div>
      );

    } else {
      return (<div className="alert alert-info w-75 p-3 mx-auto mt-4">
        <h4 className="alert-heading">Merci pour votre participation.</h4>
        <p>Cette étape de candidature est à présent terminée, vous serez recontacté prochainement afin d'obtenir plus d'information sur la prochaine étape de votre candidature. </p>
        <hr />
        <a className="card-link" href="/candidat"> Retourner à ma candidature</a>
      </div>);
    }
  }
}

export default Quizz