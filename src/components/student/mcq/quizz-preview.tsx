import React from 'react';
import Question from './question';
import Response from '../../../models/mcq/response.model';
import QuestionModel from '../../../models/mcq/question.model';
import 'bootstrap/dist/css/bootstrap.min.css';


const fakeResponses: Response[] = [{ idResponse: 3, label: "un chien" }, { idResponse: 4, label: "un chat" }, { idResponse: 5, label: "un oiseau" },]
const fakeQuestion: QuestionModel = { idQuestion: 1, title: "Quelle est la plus grande planète du système solaire ?", responses: fakeResponses }
const fakeQuestion2: QuestionModel = { idQuestion: 1, title: "Quelle est la plus grande planète du système solaire ?", responses: fakeResponses }
const content = [fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion,]

interface IState {
  answersCatched: { idQuestion: number, answers: number[] }[];
  finished: boolean;
}

interface IProps {
  //questions:QuestionModel[]
}

class Quizz extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      answersCatched: [],
      finished: false
    }
    this.handleAnswers = this.handleAnswers.bind(this);
    this.validateAnswers = this.validateAnswers.bind(this);
  }

  handleAnswers(answer: { idQuestion: number, answers: number[] }) {
    const res = this.state.answersCatched.concat(answer)
    this.setState({ answersCatched: res })
  }

  validateAnswers() {
    this.setState({ finished: true })
  }


  render() {
    if (!this.state.finished) {
      return (
        <div className="container w-70">
          {content.map(elem =>
            <Question question={elem} sendResponse={this.handleAnswers} />
          )}
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