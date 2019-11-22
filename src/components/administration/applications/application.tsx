import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/administration/applications/application.css';
import infoIcon from '../../../img/icons/information.png';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {categories} from "../../utils/categoriesEnum";
import SingleApplication from "../../../models/administration/applications/singleApplication";
import information2 from "../../../img/icons/information2.png";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { getAllJuryMembers, assignJury, getSlotId } from '../../../services/administration/applications/application.service';

interface IProps {
  application : SingleApplication,
  formation: string,
  category: number,
  handleClickRefuseApplication: any
}

interface IState {
  showModalJury: boolean
  juryMembers: Array<any>
  juryAssigned: Array<string>
}

class Application extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      showModalJury: false,
      juryMembers: [],
      juryAssigned: [],
    }

    this.getAllJury = this.getAllJury.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.getAllJury()
  }

  async getAllJury() {
    let juryMembersAPI = await getAllJuryMembers();
    let juryMembersFormat = juryMembersAPI.data.map((jury: any) => (
      jury.id + " " + jury.first_name + " " + jury.last_name
    ))
    this.setState({juryMembers: juryMembersFormat})
  }

  async handleSave() {
    getSlotId(this.props.application.ID).then(async slot => {
      console.log("TETS " + slot.data.id)
      await assignJury(slot.data.id, this.state.juryAssigned)
      this.setState({showModalJury: false})
      this.setState({juryAssigned: []})
    })
  }

  handleClose() {
    this.setState({showModalJury: false})
    this.setState({juryAssigned: []})
  }

  render() {
    return (
      <div className="card border-secondary mb-3" id="card-application">
        <div className="card-body" id="card-body-application">
          <h5 className="card-title">{this.props.application.NOM}</h5>
          {
            this.props.formation === 'Toutes'
              ? (
                <h6 className="card-subtitle mb-2 text-muted" id="card-subtitle-application"> 
                  Formation : <span className="card-subtitle-span" id="card-subtitle-span-application"> {this.props.application.FORMATION} </span>
                </h6>
              ) : (null)
          }
                
          {
            (this.props.application.ETAT !== undefined && this.props.application.ETAT !== this.props.category)
              ? (
                <h6 className="card-subtitle mb-2 text-muted" id="card-subtitle-application"> 
                  ETAT : <span className="card-subtitle-span" id="card-subtitle-span-application"> {categories.get(this.props.application.ETAT)} </span>
                </h6>
              ) : (null)
          }

          {
            this.props.application.QCM !== undefined
              ? (
                <h6 className="card-subtitle mb-2 text-muted" id="card-subtitle-application"> 
                  QCM : <span className="card-subtitle-span" id="card-subtitle-span-application"> {this.props.application.QCM} </span>
                </h6>
              ) : (null)
          }
      
          {
            this.props.application.JURY !== undefined
              ? (
                <h6 className="card-subtitle mb-2 text-muted" id="card-subtitle-application"> 
                  JURY : <span className="card-subtitle-span" id="card-subtitle-span-application"> TODO ID </span>
                  <OverlayTrigger
                    placement='right'
                    overlay={
                      <Tooltip id="idTooltip"> {this.props.application.JURY.map(elem => <div> {elem} </div>)} </Tooltip>
                    }
                  >
                  <img className="info-icon" src={infoIcon} alt=''/>
                  </OverlayTrigger>
                </h6>
              ) : (null)
          }

          {
            this.props.application.NOTE !== undefined
              ? (
                <h6 className="card-subtitle mb-2 text-muted" id="card-subtitle-application"> 
                  Note : <span className="card-subtitle-span" id="card-subtitle-span-application"> {this.props.application.NOTE} </span>
                </h6>
              ) : (null)
          }
        </div>

        <div className="buttonsTuile">
          {
              (this.props.application.ETAT !== 11) 
              ? (
                  <button id="buttonRefuse" type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.handleClickRefuseApplication(this.props.application.ID)}> Refuser </button>
              ) : (null)
              
          } 

          {
            (4 <= this.props.application.ETAT && this.props.application.ETAT <= 5 && this.props.application.ETAT !== 11)
              ? (
                  <button id="buttonMCQ" type="button" className="btn btn-secondary btn-sm"> + QCM </button>
              ) : (null)
          }

          {
            (6 <= this.props.application.ETAT && this.props.application.ETAT <= 7 && this.props.application.ETAT !== 11)
              ? (
                  <button id="buttonJury" type="button" className="btn btn-secondary btn-sm" onClick={()=> this.setState({showModalJury: true})}> + JURY </button>
              ) : (null)
          }    

          {
            this.props.application.ETAT > 1 
              ? (
                <a href={"candidature/" + this.props.application.ID} className="application-a"> Consulter <img className="info-icon-2" src={information2} alt='' /> </a>
              ) : (null)
          }

        </div>

        <Modal
            show={this.state.showModalJury}
            onHide={() => this.handleClose()}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title"> Assigner un jury à l'étudiant {this.props.application.NOM} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              {
                this.state.juryMembers.map(jury => (
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={jury.split(' ')[0]} id="defaultCheck1" 
                      onChange={ (event: React.ChangeEvent<HTMLInputElement>) => {
                        if (this.state.juryAssigned.includes(event.target.value)) {this.setState({juryAssigned: this.state.juryAssigned.filter(elem => elem !== event.target.value)})}
                        else {
                          this.setState({juryAssigned: this.state.juryAssigned.concat(event.target.value)})
                        }   
                      }}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      {jury.split(' ')[1] + ' ' + jury.split(' ')[2]}
                    </label>
                  </div>
                ))
              }
              <Modal.Footer>
                <Button variant="danger" onClick={()=> this.handleClose()}> Annuler </Button>
                <Button variant="success" onClick={()=> this.handleSave()}> Enregistrer </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>

      </div>
         
    );
  }
}

export default Application;