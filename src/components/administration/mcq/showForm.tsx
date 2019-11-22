import React from 'react';
import Response from '../../../models/mcq/response.model';
import QuestionModel from '../../../models/mcq/question.model';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mcq from '../../../models/mcq/mcq.model';
import '../../../style/mcq.css';
import { getQCMAdmin } from '../../../services/qcm.service'
import { Link } from 'react-router-dom';

interface IState {
  qcm: Mcq;
}

interface IProps {
  idQcm: number
}

const fakeResponses: Response[] = [{ id: 3, label: "un chien", correct: true }, { id: 4, label: "un chat" }, { id: 5, label: "un oiseau" },]
const fakeQuestion: QuestionModel = { id: 1, title: "Quelle est la plus grande planète du système solaire ?", responses: fakeResponses }
const content = [fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion, fakeQuestion,]
const qcm = new Mcq()
qcm.formation = "IG"
qcm.origin = "IUT"
qcm.questions = content
qcm.title = "Bonjour"

class ShowQuizz extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { qcm: qcm }

  }

  componentDidMount() {
    if (this.props.idQcm !== undefined) {
      const res = getQCMAdmin(this.props.idQcm)
      res.then((mcq) => {
        this.setState({ qcm: mcq })
      })
    }
  }

  render() {

    return (
      <div className="p-5">
        <Link to={'/administration/qcm/'} style={{ textDecoration: 'none' }}>
          <button className="btn btn-outline-primary">
            <img src="https://img.icons8.com/color/48/000000/back.png" className="back-icon" alt="back arrow" />
            Retour à la liste de QCM
          </button>
        </Link>
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