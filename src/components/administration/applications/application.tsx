import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/applications/application.css';
import infoIcon from '../../../img/icons/information.png';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {categories} from "../../utils/categoriesEnum";
import SingleApplication from "../../../models/singleApplication";

interface IProps {
  application : SingleApplication,
  formation: string,
  category: number,
  handleClickRefuseApplication: any
}

class Application extends React.Component<IProps> {
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
                  <a href="#">
                    <button id="buttonRefuse" type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.handleClickRefuseApplication(this.props.application.ID)}> Refuser </button>
                  </a>
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
                  <button id="buttonJury" type="button" className="btn btn-secondary btn-sm"> + JURY </button>
              ) : (null)
          }    
        </div>
      </div>
         
    );
  }
}

export default Application;