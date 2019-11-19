import React from 'react';
import Response from '../../../models/mcq/response.model';
import QuestionModel from '../../../models/mcq/question.model';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mcq from '../../../models/mcq/mcq.model';
import '../../../style/mcq.css';

interface IState {
  qcm: Mcq;
}

interface IProps {
  idQcm: number;
}

const fakeResponses: Response[] = [{ idResponse: 3, label: "un chien", correct:true }, { idResponse: 4, label: "un chat" }, { idResponse: 5, label: "un oiseau" },]
const fakeQuestion: QuestionModel = { idQuestion: 1, title: "Quelle est la plus grande planète du système solaire ?", responses: fakeResponses }
const content = [fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion,]
const qcm = new Mcq()
qcm.formation = "IG"
qcm.origin = "IUT"
qcm.questions = content
qcm.title = "Bonjour"

class ShowQuizz extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {qcm : qcm}
    /*
    const res = getQCM(this.props.idQcm)
    res.then((mcq) => {
      this.setState({ qcm: mcq })
    })
    */
  }

  render() {
    return (
      <div className="p-5">
        <button className="btn btn-outline-primary">
          <img src="https://img.icons8.com/color/48/000000/back.png" className="back-icon"/>
          Retour à la liste de QCM
          </button>
        <h3 className="mt-5">{this.state.qcm.title} - {this.state.qcm.formation} - {this.state.qcm.origin} </h3>
        {
          this.state.qcm.questions.map(question => (
            <div className="card p-2 mb-3">
              <h5>{question.title}</h5>
              {
                question.responses.map(response => (
                  <div>
                    <p className={response.correct ? "text-success" : "text-danger"}>{response.label}</p>
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default ShowQuizz;