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
  category: number
}

class Application extends React.Component<IProps> {
  render() {
    return (
      ((this.props.application.FORMATION === this.props.formation || this.props.formation === 'Toutes') && (this.props.application.ETAT === this.props.category || this.props.category===0)) 
        ? (
            <div className="card border-secondary mb-3">
              <div className="card-body">
                <h5 className="card-title">{this.props.application.NOM}</h5>
                {
                  this.props.formation === 'Toutes'
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        Formation : <span className="card-subtitle-span"> {this.props.application.FORMATION} </span>
                      </h6>
                    ) : (null)
                }
                
                {
                  this.props.application.ETAT !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        ETAT : <span className="card-subtitle-span"> {categories.get(this.props.application.ETAT)} </span>
                      </h6>
                    ) : (null)
                }

                {
                  this.props.application.QCM !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        QCM : <span className="card-subtitle-span"> {this.props.application.QCM} </span>
                      </h6>
                    ) : (null)
                }
      
                {
                  this.props.application.JURY !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        JURY : <span className="card-subtitle-span"> TODO ID </span>
                        <OverlayTrigger
                          placement='right'
                          overlay={
                            <Tooltip id="idTooltip"> {this.props.application.JURY.map(elem => <div> {elem} </div>)} </Tooltip>
                          }
                        >
                        <img src={infoIcon} alt=''/>
                        </OverlayTrigger>
                      </h6>
                    ) : (null)
                }
      
                {
                  this.props.application.NOTE !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        Note : <span className="card-subtitle-span"> {this.props.application.NOTE} </span>
                      </h6>
                    ) : (null)
                }
              </div>

              <div className="buttonsTuile">
                {
                   (this.props.application.ETAT !== 11) 
                    ? (
                        <button id="buttonRefuse" type="button" className="btn btn-secondary btn-sm"> Refuser </button>
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
          ) : (
          null
        )
    );
  }
}

export default Application;