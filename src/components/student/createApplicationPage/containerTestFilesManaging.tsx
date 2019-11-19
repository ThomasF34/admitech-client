import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FileContainer from './filesContainer';

//State and Props
interface IProps {

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

class FakeContainerFiles extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      attachments: [{ id: 1, attach_type: 'cv', key: '1234.pdf', fileName: 'fileNameExemple' }]
    };
    this.handleChangeAttachement = this.handleChangeAttachement.bind(this);
  }

  handleChangeAttachement(attachementsUpdated: IAttachement[]) {
    this.setState({
      attachments: attachementsUpdated
    })
  }

  render() {
    console.log(this.state.attachments)
    return (
      <FileContainer handleChangeAttachement={this.handleChangeAttachement} candId={1} attachments={this.state.attachments} />
    )
  }
}

export default FakeContainerFiles;