import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Response from '../../../models/mcq/response.model'
import Question from '../../../models/mcq/question.model'
import '../../../style/mcq.css'

interface IState {
  questionName: string,
  responses: Response[],
  currentResponse: string,
  checked: boolean;
  currentId: number;
}

interface IProps {
  action: any;
}



class FormQuestion extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      questionName: '',
      responses: [],
      currentResponse: '',
      checked: false,
      currentId: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.saveResponse = this.saveResponse.bind(this)
    this.displayExistingAnswers = this.displayExistingAnswers.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleQuestionNameChange = this.handleQuestionNameChange.bind(this)
  }

  handleQuestionNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ questionName: event.target.value })
  }

  saveResponse() {
    const response = new Response()
    response.label = this.state.currentResponse;
    response.correct = this.state.checked;
    

    const res = this.state.responses
    const currentId = this.state.currentId + 1
    res.push(response)
    this.setState({
      responses: res,
      currentResponse: '',
      checked: false,
      currentId: currentId,
    })
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ currentResponse: event.target.value })
  }

  handleCheckChange() {
    if (this.state.checked) {
      this.setState({ checked: false })
    } else {
      this.setState({ checked: true })
    }
  }

  deleteItem(id: number) {
    const responses = this.state.responses;
    const res = responses.filter(elem => elem.idResponse !== id)
    this.setState({ responses: res })
  }


  sendQuestion() {
    // Check si il existe au moins une réponse juste.
    const responses = this.state.responses
    if (responses.map(elem => elem.correct).filter(elem => elem).length === 0) {
      window.alert("Il n'y a pas de réponse juste... Vous devriez en ajouter une !")
    } else if (responses.map(elem => elem.correct).filter(elem => !elem).length === 0) {
      window.alert("Il n'y a pas de mauvaise réponse... Vous devriez en rajouter quelques unes...")
    } else if (this.state.questionName === '') {
      window.alert("Vous n'avez pas donné d'intitulé à votre question... Rajoutez en un avant de valider.")
    } else {
      // Créer une nouvelle question.
      const newQuestion = new Question()
      newQuestion.title = this.state.questionName
      newQuestion.responses = this.state.responses
      // Envoyer la question au composant parent.
      this.props.action(newQuestion)
    }


  }

  displayExistingAnswers() {
    if (this.state.responses.length !== 0) {
      return (
        <div>
          {
            this.state.responses.map((elem) => (
              <div className="input-group mb-3 col-12">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    {elem.correct ? <input type="checkbox" defaultChecked disabled /> :
                      < input type="checkbox" disabled />
                    }

                  </div>
                </div>
                <input type="text" className="form-control" disabled value={elem.label} />
                <button className="btn btn-outline-danger" type="button" id="button-addon2" onClick={() => this.deleteItem(elem.idResponse)}>Supprimer</button>
              </div>
            ))
          }
        </div>);
    } else {
      return (<div className="alert alert-light col-8 sm mx-auto" role="alert">Aucune réponse n'est disponible.. Créez en de nouvelles !</div>)
    }
  }


  render() {
    return (

      <div className="p-3 mt-3 mb-3 card">
        <h5 className="card-title">3. Création d'une question</h5>
        <div className="card-body">
          <div className="input-group mb-3 ml-0 mr-0 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Intitulé </span>
            </div>
            <input type="text" className="form-control" placeholder="Quelle est la distance Terre - Lune ?" onChange={(event) => this.handleQuestionNameChange(event)} />
          </div>
          <hr></hr>
          <h6>Réponses enregistrées: </h6>
          {this.displayExistingAnswers()}
          <hr></hr>
          <h6>Ajouter une nouvelle réponse: </h6>
          <p className='little-message col-12'>Cochez la case pour indiquer si la réponse est correcte. Laissez la vide pour indiquer que la proposition n'est pas une bonne réponse. </p>
          <div className="input-group mb-3 col-12">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input type="checkbox" onChange={this.handleCheckChange} />
              </div>
            </div>
            <input type="text" className="form-control" onChange={(event) => this.handleChange(event)} value={this.state.currentResponse} />
            <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={this.saveResponse}>Ajouter</button>
          </div>
        </div>
        <button className="btn btn-outline-success col-6 mx-auto" onClick={() => this.sendQuestion()}>Ajouter au QCM</button>
      </div>

    )
  }
}

export default FormQuestion