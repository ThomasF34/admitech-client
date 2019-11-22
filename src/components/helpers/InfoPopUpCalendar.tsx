import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface IProps {
  title: string,
  content: string,
}

class InfoPopUpCalendar extends React.Component<IProps> {
  render() {
    return (
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title> {this.props.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body> {this.props.content} </Modal.Body>
        <Modal.Footer>
          <Button href='/etudiant/accueil'>
            Retourner à la page d'accueil
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InfoPopUpCalendar;