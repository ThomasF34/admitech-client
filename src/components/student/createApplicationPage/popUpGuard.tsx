import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'react-bootstrap';

//State and Props
interface IProps {
  showPopup: boolean,
  closePopUp: () => void,
  onClickDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,value: boolean) => void
}

interface IState {
  attachments: Array<IAttachement>
}

interface IAttachement {
  id?: number,
  attach_type: string,
  key: string,
  fileName: string
  file?: any
}

class PopUpGuard extends React.Component<IProps, IState> {

  render() {

    return (
      <Modal show={this.props.showPopup} onHide={() => this.props.closePopUp()}>
        <Modal.Header closeButton>
          <Modal.Title>Suppression d'un fichier</Modal.Title>
        </Modal.Header>
        <Modal.Body>Etes-vous sûr de vouloir supprimer ce fichier?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.props.closePopUp()}>
            Annuler
          </Button>
          <Button variant="danger" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.props.onClickDelete(e,true)}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default PopUpGuard;