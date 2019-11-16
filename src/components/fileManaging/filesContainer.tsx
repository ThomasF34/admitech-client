import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/fileManaging.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { handleUpload } from '../../services/filesManaging.service';
import { getListOfTypesOfFiles, getTypeConverted } from './filesManaging.helper';

//State and Props
interface IProps {
    attachments: Array<IAttachement>,
    candId: number
}

interface IState {
    typesList: Array<IOption>,
    currentFile: any,
    curentTypeFile: string
    filesAdded: Array<IAttachement>,
    error: boolean,
    added: boolean,
    deleted: boolean,
    formatNotSupproted: boolean,
    disabled: boolean,
    sizeNotSupproted: boolean
}
//Utils Interfaces

interface IAttachement {
    id?: number,
    attach_type: string,
    url: string,
    file: any
}

interface IOption {
    attach_type: string,
    typeConverted: string
}

class FileContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            typesList: getListOfTypesOfFiles(this.props.attachments),
            currentFile: null,
            curentTypeFile: '',
            filesAdded: this.props.attachments,
            error: false,
            added: false,
            deleted: false,
            formatNotSupproted: false,
            disabled: true,
            sizeNotSupproted: false
        };
        this.removeElementInTypes = this.removeElementInTypes.bind(this);
    }

    handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        let reader = new FileReader();
        let file = e.target.files![0];
        const extension = file.name.split('.')

        this.setState({
            currentFile: file,
            added: false,
            deleted: false
        });

        if (file.size > 1000000) {
            this.setState({
                sizeNotSupproted: true,
                disabled: true
            });
        } else { this.setState({ sizeNotSupproted: false, }); }
        if (extension[extension.length - 1] === 'pdf' || extension[extension.length - 1] === 'png' || extension[extension.length - 1] === 'jpeg') {
            this.setState({
                formatNotSupproted: false,
                disabled: false,
                sizeNotSupproted: false,
            });
            reader.readAsDataURL(file);
        } else {
            this.setState({
                formatNotSupproted: true,
                disabled: true
            });
        }
    }

    handleTypeChange(attach_type: string) {
        this.setState({
            curentTypeFile: attach_type,
            added: false,
            deleted: false
        });
    }

    async addNewFile(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (this.state.curentTypeFile === '' || this.state.currentFile === null) {
            this.setState({ error: true });
        } else {
            let urlFile: string = '';


            /*  handleUpload(this.state.currentFile).then(url =>{
                  if(url){
                      urlFile = url
                  }
              });*/
            const newAttachement: IAttachement = { url: urlFile, attach_type: this.state.curentTypeFile, file: this.state.currentFile }
            this.removeElementInTypes();
            this.setState(previousState => ({
                filesAdded: [...previousState.filesAdded, newAttachement],
                curentTypeFile: '',
                currentFile: null,
                error: false,
                added: true
            }));
        }
    }

    removeElementInTypes() {
        const listTypes = this.state.typesList
        const currentFile = this.state.curentTypeFile;
        const newList = listTypes.filter(function (type) {
            return type.attach_type !== currentFile;
        });
        this.setState({
            typesList: newList
        })
    }

    resetListOfTypes(typeFile: string) {
        const type: IOption = { attach_type: typeFile, typeConverted: getTypeConverted(typeFile) }
        this.setState(previousState => ({
            typesList: [...previousState.typesList, type]
        }));
    }

    removeElemFromListAdded(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: IAttachement) {
        event.preventDefault();
        const listAdded = this.state.filesAdded;
        const newList = listAdded.filter(function (elem) {
            return elem.attach_type !== file.attach_type;
        });
        this.setState({
            filesAdded: newList,
            deleted: true,
            added: false
        });
        this.resetListOfTypes(file.attach_type);
    }

    render() {
        return (
            <div className='container bg-light mt-5 p-3'>
                <form className="row">
                    <div className="form-group ml-2 mb-2">
                        <select id="file-select" className='form-control'>
                            {this.state.typesList.map(file => (
                                <option key={file.attach_type} value={file.attach_type} onClick={() => this.handleTypeChange(file.attach_type)} >{file.typeConverted}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="file" className="label-file btn btn-info">Télécharger</label>
                        <input id="file" type="file" className="form-control-file input-file" onChange={(e) => this.handleImageChange(e)} />
                    </div>
                    <div className="form-group mb-2">
                        {this.state.currentFile !== null ? (
                            <button className='btn btn-success' disabled={this.state.disabled} onClick={(e) => this.addNewFile(e)}>Ajouter</button>) : null}
                    </div>
                </form>
                <div>
                    {this.state.currentFile !== null ? <small className='display'>Fichier téléchargé : {this.state.currentFile.name} -- {this.state.currentFile.size / 1000000} MB</small> : null}
                    {this.state.error ? <div className="alert alert-danger mt-2 text-center" role="alert"> Choisissez un fichier et un type de fichier S.V.P</div> : null}
                    {this.state.added ? <div className="alert alert-success mt-2 text-center" role="alert"> Ajout réussi !</div> : null}
                    {this.state.deleted ? <div className="alert alert-success mt-2 text-center" role="alert"> Suppression réussie !</div> : null}
                    {this.state.formatNotSupproted ? <div className="alert alert-danger mt-2 text-center" role="alert"> Format de fichier non supporté (Seulement: png, jpeg ou pdf)</div> : null}
                    {this.state.sizeNotSupproted ? <div className="alert alert-danger mt-2 text-center" role="alert">Taille du fichier maximale : 1MB</div> : null}
                </div>
                <div>
                    <hr />
                    <h4>Mes fichiers téléchargés</h4>
                    {this.state.filesAdded.map(file => (
                        <div className='mb-2' key={file.id}><span className="badge badge-success">OK</span> <span className='text-info'>{getTypeConverted(file.attach_type)}</span> :
                   {file.file === null ? <span className='text-secondary'> <a href={file.url} target='_blank' rel="noopener noreferrer">voir</a></span> : <span className='text-secondary'> {file.file.name} </span>}
                            <button className='btn btn-sm btn-danger ml-1' onClick={(e) => this.removeElemFromListAdded(e, file)} > <FontAwesomeIcon icon={faTimesCircle} /></button> </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FileContainer;