
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './confirmationPopUp.css';

interface IProps {
  title: string,
  content: string,
  show: boolean,
  onClose: () => void
}

interface IState {
  closed: boolean
}

class ConfirmationPopUp extends React.Component<IProps, IState> {
  render() {
    return (
        <Modal show={this.props.show} onHide={() => this.props.onClose()}>
            <Modal.Header closeButton>
                <Modal.Title> {this.props.title} </Modal.Title>
            </Modal.Header>

            <Modal.Body> <p className="text-danger"> {this.props.content} </p> </Modal.Body>

            <Modal.Footer>
                <div id='ButtonsConfirmationPopUpCancel'>
                    <span id="ButtonConfirmatinPopUp">
                        <Button variant="danger" onClick={() => this.props.onClose()}>
                            Annuler 
                        </Button>
                    </span>

                    <span id="ButtonConfirmatinPopUpOk"> 
                        <Button variant="success" onClick={() => this.props.onClose()}>
                            Confirmer
                        </Button>
                    </span>
                </div>
            </Modal.Footer>
        </Modal>
    );
  }
}

export default ConfirmationPopUp;