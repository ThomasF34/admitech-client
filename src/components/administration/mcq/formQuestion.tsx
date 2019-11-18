import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Response from '../../../models/mcq/response.model'
import Question from '../../../models/mcq/question.model'
import '../../../style/mcq.css'

interface IState {
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
      responses: [{ idResponse: 0, value: "bonjour", isCorrect: true }],
      currentResponse: '',
      checked: false,
      currentId: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.saveResponse = this.saveResponse.bind(this)
    this.displayExistingAnswers = this.displayExistingAnswers.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  onChangeNewAnswer() {

  }

  changeAnswer() {
    //This method will be curryed.
  }

  saveResponse() {
    const response = new Response()
    response.idResponse = this.state.currentId;
    response.isCorrect = this.state.checked;
    response.value = this.state.currentResponse;

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

  handleChange(event : React.ChangeEvent<HTMLInputElement>) {
    this.setState({currentResponse : event.target.value})
  }

  handleCheckChange() {
    if (this.state.checked) {
      this.setState({checked : false})
    } else {
      this.setState({ checked: true })
    }
  }

  deleteItem(id: number) {
    const responses = this.state.responses;
    const res = responses.filter(elem => elem.idResponse !== id)
    this.setState({responses : res})
  }

  sendQuestion() {
    // Check si il existe au moins une réponse juste.
    // Créer une nouvelle question.
    // Envoyer la question au composant parent.
  }

  displayExistingAnswers() {
    return (
      <div>
      {
      this.state.responses.map((elem) => (
        <div className="input-group mb-3 col-12">
          <div className="input-group-prepend">
            <div className="input-group-text">
              {elem.isCorrect ? <input type="checkbox" defaultChecked disabled/> :
                < input type="checkbox" disabled/>
              }
              
            </div>
          </div>  
          <input type="text" className="form-control" disabled value={elem.value} />
          <button className="btn btn-outline-danger" type="button" id="button-addon2" onClick={ () => this.deleteItem(elem.idResponse)}>Supprimer</button>
        </div>
      ))
        }
      </div>);
          
      }
    
    
  render() {
    return (

      <div className="card p-2 mt-3">
        <h5 className="card-title">Création d'une question</h5>
        <div className="card-body">
          <div className="input-group mb-3 ml-0 mr-0 col-12">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Intitulé </span>
            </div>
            <input type="text" className="form-control" placeholder="Quelle est la distance Terre - Lune ?" aria-label="Username" aria-describedby="basic-addon1" />
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
            <input type="text" className="form-control" onChange={(event) => this.handleChange(event)} value={this.state.currentResponse}/>
            <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={this.saveResponse}>Ajouter</button>
          </div>
        </div>
        <button className="btn btn-outline-success col-6 mx-auto" onClick={() => this.sendQuestion()}>Ajouter au QCM</button>
      </div>

    )
  }
}

export  default FormQuestion