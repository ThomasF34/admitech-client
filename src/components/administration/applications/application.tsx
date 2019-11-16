import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style/applications/application.css';
import infoIcon from '../../../img/icons/information.png';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

let categories = new Map<number, string>();
categories.set(0, 'Tous');
categories.set(1, 'Brouillon');
categories.set(2, 'Soumis');
categories.set(3, 'Dossier incomplet');
categories.set(4, 'Dossier complet');
categories.set(5, 'QCM à effectuer');
categories.set(6, 'QCM effectué');
categories.set(7, 'Entretien à programmer');
categories.set(8, 'Entretien programmé');
categories.set(9, 'Entretien passé');
categories.set(10, 'Admis');
categories.set(11, 'Refusé');

interface IProps {
  student : any,
  formation: string,
  category: number
}

class Application extends React.Component<IProps> {
  render() {
    return (
      ((this.props.student.FORMATION === this.props.formation || this.props.formation === 'Toutes') && (this.props.student.ETAT === this.props.category || this.props.category===0)) 
        ? (
            <div className="card border-secondary mb-3">
              <div className="card-body">
                <h5 className="card-title">{this.props.student.NOM}</h5>
                {
                  this.props.formation === 'Toutes'
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        Formation : <span className="card-subtitle-span"> {this.props.student.FORMATION} </span>
                      </h6>
                    ) : (null)
                }
                
                {
                  this.props.student.ETAT !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        ETAT : <span className="card-subtitle-span"> {categories.get(this.props.student.ETAT)} </span>
                      </h6>
                    ) : (null)
                }

                {
                  this.props.student.QCM !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        QCM : <span className="card-subtitle-span"> {this.props.student.QCM} </span>
                      </h6>
                    ) : (null)
                }
      
                {
                  this.props.student.JURY !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        JURY : <span className="card-subtitle-span"> TODO ID </span>
                        <OverlayTrigger
                          placement='right'
                          overlay={
                            <Tooltip id="idTooltip"> {this.props.student.JURY.map((elem: string) => <div> {elem} </div>)} </Tooltip>
                          }
                        >
                        <img src={infoIcon}/>
                        </OverlayTrigger>
                      </h6>
                    ) : (null)
                }
      
                {
                  this.props.student.NOTE !== null
                    ? (
                      <h6 className="card-subtitle mb-2 text-muted"> 
                        Note : <span className="card-subtitle-span"> {this.props.student.NOTE} </span>
                      </h6>
                    ) : (null)
                }
              </div>

              <div className="buttonsTuile">
                {
                   (this.props.student.ETAT !== 11) 
                    ? (
                        <button id="buttonRefuse" type="button" className="btn btn-secondary btn-sm"> Refuser </button>
                    ) : (null)
                    
                } 

                {
                  (4 <= this.props.student.ETAT && this.props.student.ETAT <= 5 && this.props.student.ETAT !== 11)
                    ? (
                        <button id="buttonMCQ" type="button" className="btn btn-secondary btn-sm"> + QCM </button>
                    ) : (null)
                }
      
                {
                  (6 <= this.props.student.ETAT && this.props.student.ETAT <= 7 && this.props.student.ETAT !== 11)
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