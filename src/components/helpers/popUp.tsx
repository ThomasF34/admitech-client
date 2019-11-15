
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface IProps {
  title: string,
  content: string,
  show: boolean,
  onClose: () => void
}

interface IState {
  closed: boolean
}
class PopUp extends React.Component<IProps, IState> {
  render() {
    return (

      <Modal show={this.props.show} onHide={() => this.props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.content}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => this.props.onClose()}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default PopUp;