import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from '../../../models/mcq/question.model'
import '../../../style/mcq.css'
import FormQuestion from './formQuestion';
import Mcq from '../../../models/mcq/mcq.model';
import {sendQCM} from '../../../services/qcm.service'

interface IState {
  questions: Question[],
  origin: string,
  formation: string, 
  title : string
}

interface IProps {
}



class QuizzCreator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      origin: '',
      formation: '',
      title: '',
      questions: []
    }
    this.showResponse = this.showResponse.bind(this)
    this.handleNewQuestion = this.handleNewQuestion.bind(this)
    this.displayQuestionSaved = this.displayQuestionSaved.bind(this)
    this.sendQCM = this.sendQCM.bind(this)
    this.changeFormation = this.changeFormation.bind(this)
    this.changeOrigin = this.changeOrigin.bind(this)
    this.changetitle = this.changetitle.bind(this)
  }


  displayQuestionSaved() {
    if (this.state.questions.length !== 0) {
      return (
        <div>
          {
            this.state.questions.map(question => (
              <div className="card pl-2 pt-2">
                <h5 className="card-title">{question.title}</h5>
                  {
                    question.responses.map(reponse => (
                      <p className={reponse.correct ? "text-success" : "text-danger"}> - {reponse.label}</p>
                    ))
                  }
              </div>
            ))
          }
        </div>
      );
    } else {
      return (<div className="alert alert-info col-6 mx-auto" role="alert">Aucune question n'est enregistrée pour ce QCM... Créez en une nouvelle pour qu'elle apparaisse ici.</div>)
    }
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

  handleNewQuestion(question: Question) {
    const questions = this.state.questions
    questions.push(question)
    this.setState({
        questions: questions
    })  
  }

  changeOrigin(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ origin : event.target.value})
  }

  changeFormation(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ formation: event.target.value })
  }

  changetitle(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ title: event.target.value })
  }




  sendQCM() {
    const mcq = new Mcq()
    mcq.title = this.state.title
    mcq.formation = this.state.formation
    mcq.origin = this.state.origin
    mcq.questions = this.state.questions
    
    console.log(mcq)
    const res = sendQCM(mcq)
    console.log(res)
  }

  render() {
    return (
      <div className='container'>
        <h3>Formulaire de création d'un quizz</h3>
        <button className="btn btn-outline-primary float-right col-12 mb-3" type="button" onClick={() => this.sendQCM()}>Sauvegarger et envoyer le QCM</button>
        <div className="card p-3 mb-2">
          <h5 className="card-title">1. Informations générales</h5>
          <div className="card-body">
            <form className="form-inline col-12">
              <div className="input-group mb-3 col-6">
                <div className="input-group-prepend">
                  <label className="input-group-text">Formation</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => this.changeFormation(event)}>
                  <option selected>Choisir...</option>
                  <option value="DO">DO</option>
                  <option value="SE">SE</option>
                </select>
              </div>

              <div className="input-group mb-3 col-6">
                <div className="input-group-prepend">
                  <label className="input-group-text">Provenance</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={ (event) => this.changeOrigin(event)}>
                  <option selected>Choisir</option>
                  <option value="Peip">PeiP</option>
                  <option value="DUT">DUT</option>
                  <option value="BTS">BTS</option>
                </select>
              </div>

              <div className="input-group col-12 mb-5">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Nom</span>
                </div>
                <input type="text" className="form-control" placeholder="Donnez un nom à votre QCM" onChange={ (event) => this.changetitle(event)} />
              </div>
            </form>
          </div>
        </div>
        
        <div className="card p-3 mb-2">
          <h5 className="card-title">2. Questions sauvegardées</h5>
          <div className="card-body"></div>
          {this.displayQuestionSaved()}
        </div>

        <FormQuestion action={this.handleNewQuestion} />


        </div>


    )
  }
}

export default QuizzCreator;