import React from 'react';
import Response from '../../../models/mcq/response.model'
import QuestionModel from '../../../models/mcq/question.model'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/mcq.css'



interface IState {
  elemChecked: number[];
  pressed: boolean;
  cardProperties: string;
  message: string;
}

interface IProps {
  question: QuestionModel;
  sendResponse: any;
}


class Question extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      elemChecked: [],
      pressed: false,
      cardProperties: 'card w-75 p-3 mx-auto mt-5',
      message:'En cliquant sur enregistrer, vous ne pourrez plus modifier vos réponses.'
    }
    console.log(this.props.question)
    this.changeResponses = this.changeResponses.bind(this)
    this.saveResponses = this.saveResponses.bind(this)
  }



  changeResponses(id: number) {
    if (this.state.elemChecked.includes(id)) {
      const filteredItems = this.state.elemChecked.filter(item => item !== id)
      this.setState({ elemChecked: filteredItems})

    } else {
      const checked = this.state.elemChecked
      checked.push(id)
      this.setState({ elemChecked: checked })
    }
  }

  saveResponses(event: React.FormEvent) {
    event.preventDefault()
    if (!this.state.pressed) {
      this.setState({ pressed: true , message:"Réponse enregistrée"})
      this.props.sendResponse({ idQuestion: this.props.question.id, responses: this.state.elemChecked })
    }
  }

  render() {
    return (
      <div className={this.state.cardProperties}>
        <h5 className="card-title">{this.props.question.title}</h5>
        <div className="card-body">
        <form onSubmit={(event) => this.saveResponses(event)}>
              {this.props.question.responses.map((elem: Response) =>
                <div className='response'>
                  <label>
                    <input type="checkbox" key={elem.label} disabled={this.state.pressed} onClick={() => this.changeResponses(elem.id)} />
                    {elem.label}
                  </label>
                </div>
            )}
            <div className="row mt-2">
              <div className="message col-7 align-middle">{this.state.message}</div>
              <button className="btn btn-sm btn-outline-secondary col-3" type="submit">Valider</button>
            </div>
        </form>
        </div>
      </div>

    )
  }
}

export default Question