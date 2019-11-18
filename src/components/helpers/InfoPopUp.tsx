
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface IProps {
  isError: boolean,
  title: string,
  content: string,
  show: boolean,
  onClose: () => void
}

interface IState {
  closed: boolean
}
class InfoPopUp extends React.Component<IProps, IState> {
  render() {
    return (

      <Modal show={this.props.show} onHide={() => this.props.onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p className={this.props.isError ? "text-danger" : "text-success"}>{this.props.content}</p></Modal.Body>
        <Modal.Footer>
          <Button variant={this.props.isError ? "danger" : "success"} onClick={() => this.props.onClose()}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default InfoPopUp;