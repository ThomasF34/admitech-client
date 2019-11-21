
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/confirmationPopUp.css';

interface IProps {
  title: string,
  content: string,
  show: boolean,
  onClose: (action: string) => void
}

class ConfirmationPopUp extends React.Component<IProps> {
  render() {
    return (
        <Modal show={this.props.show} onHide={() => this.props.onClose('cancel')}>
            <Modal.Header closeButton>
                <Modal.Title> {this.props.title} </Modal.Title>
            </Modal.Header>

            <Modal.Body> <p className="text-danger"> {this.props.content} </p> </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={() => this.props.onClose('cancel')}>
                    Annuler 
                </Button>

                <span id="ButtonConfirmatinPopUpOk"> 
                    <Button variant="success" onClick={() => this.props.onClose('valid')}>
                        Confirmer
                    </Button>
                </span>
            </Modal.Footer>
        </Modal>
    );
  }
}

export default ConfirmationPopUp;