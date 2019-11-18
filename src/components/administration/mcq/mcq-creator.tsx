import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Response from '../../../models/mcq/response.model'
import Question from '../../../models/mcq/question.model'
import '../../../style/mcq.css'
import FormQuestion from './formQuestion';

interface IState {
  questions: Question[]
}

interface IProps {
}



class QuizzCreator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      questions: []
    }
    this.showResponse = this.showResponse.bind(this)
    this.handleNewQuestion = this.handleNewQuestion.bind(this)
  }



  showResponse() {
    return (
      this.state.questions.map(elem =>
        <div className="input-group mb-3 col-10">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="checkbox" aria-label="Check si c'est une réponse valide" />
            </div>
          </div>
          <input type="text" className="form-control" aria-label="Text input with checkbox" />
        </div>
      )
    )
  }

  handleNewQuestion() {
    
  }

  render() {
    return (
      <div className='container'>
        <h3>Formulaire de création d'un quizz</h3>
        <div className="card p-5">
          <h5 className="card-title">Informations générales</h5>
          <div className="card-body">
            <form className="form-inline col-12">

              <div className="input-group mb-3 col-6">
                <div className="input-group-prepend">
                  <label className="input-group-text">Formation</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Choisir...</option>
                  <option value="1">DO</option>
                  <option value="2">SE</option>
                </select>
              </div>

              <div className="input-group mb-3 col-6">
                <div className="input-group-prepend">
                  <label className="input-group-text">Provenance</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Choisir</option>
                  <option value="1">PeiP</option>
                  <option value="2">DUT</option>
                  <option value="3">BTS</option>
                </select>
              </div>

              <div className="input-group col-12 mb-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Nom</span>
                </div>
                <input type="text" className="form-control" placeholder="Donnez un nom à votre QCM" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </form>
            <FormQuestion action={this.handleNewQuestion} />
          </div>
        </div>
      </div>


    )
  }
}

export default QuizzCreator;