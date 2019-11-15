
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface IProps {
  title: string,
  content: string,
  show: boolean
}

interface IState {
  closed: boolean
}
class PopUp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      closed: false //never closed at this moment
    };
  }
  handleClose = () => this.setState({
    closed: true
  });

  shouldShow = (): boolean => {
    console.log("pop prop "+this.props.show)
    console.log("pop closed "+this.state.closed)
    //parent wants it to show and is not closed => show
    if (this.props.show && !this.state.closed)
      return true
    else {
       //parent wants it to show bit is closed => not show
     //if (this.props.show && this.state.closed)
  
        //shouldn't show
        return false
    }
  }

  render() {

    return (

      <Modal show={this.shouldShow()} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.content}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => this.handleClose()}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default PopUp;