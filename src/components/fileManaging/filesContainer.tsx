import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/fileManaging.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

//State and Props
interface IProps {
    attachments: Array<IAttachement>
}

interface IState {
    typesList: Array<IOption>,
    currentFile: any,
    curentTypeFile: string
    filesAdded: Array<IAttachement>,
    error: boolean,
    added: boolean,
    deleted: boolean
}
//Utils Interfaces

interface IAttachement {
    id: number,
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
            typesList: this.getListOfTypesOfFiles(this.props.attachments),
            currentFile: null,
            curentTypeFile: '',
            filesAdded: this.props.attachments,
            error: false,
            added: false,
            deleted: false
        };
        this.removeElementInTypes = this.removeElementInTypes.bind(this);
    }

    getListOfTypesOfFiles(attachments: IAttachement[]): IOption[] {

        let attachmentsIOptions: IOption[] = attachments.map((attach) => {
            const option: IOption = { attach_type: attach.attach_type, typeConverted: this.getTypeConverted(attach.attach_type) }
            return option;
        });
        const default_value: IOption = { attach_type: '', typeConverted: '--Type de fichier--' };
        const cover_letter: IOption = { attach_type: 'cover_letter', typeConverted: 'Lettre de motivation' };
        const cv: IOption = { attach_type: 'cv', typeConverted: 'CV' };
        const bac_marks: IOption = { attach_type: 'bac_marks', typeConverted: 'Notes du Bac' };
        const year_marks: IOption = { attach_type: 'year_marks', typeConverted: 'Notes' };
        const current_year_marks: IOption = { attach_type: 'current_year_marks', typeConverted: 'Notes année courante' };
        const notice_further_study: IOption = { attach_type: 'notice_further_study', typeConverted: 'Avis poursuite d\'études' };

        let attachmentsBacis = [default_value, cover_letter, cv, bac_marks, year_marks, current_year_marks, notice_further_study];

        let indexesToPop: number[] = [];
        attachmentsIOptions.forEach((a) => {
             attachmentsBacis.filter((elem => {
                if (elem.attach_type === a.attach_type) { indexesToPop.push(attachmentsBacis.indexOf(elem)) }
                return true;
            }));
        })

        function arrayRemove(arr: IOption[], value: IOption) {
            return arr.filter((ele) => { return ele !== value; });
        }

        for (let i in indexesToPop) {
            attachmentsBacis = arrayRemove(attachmentsBacis, attachmentsBacis[indexesToPop[i]]);
        }
        return attachmentsBacis;
    }

    getTypeConverted(attach_type: string): string {
        const typesConverted = ['--Type de fichier--', 'Lettre de motivation', 'CV', 'Notes du Bac', 'Notes', 'Notes année courante', 'Avis poursuite d\'études'];
        const attachTypes = ['', 'cover_letter', 'cv', 'bac_marks', 'year_marks', 'current_year_marks', 'notice_further_study'];
        const index = attachTypes.indexOf(attach_type);
        return typesConverted[index];
    }

    handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {

        let reader = new FileReader();
        let file = e.target.files![0];
        this.setState({
            currentFile: file,
            added: false,
            deleted: false
        });
        reader.readAsDataURL(file);
    }

    handleTypeChange(e: React.MouseEvent<HTMLOptionElement, MouseEvent>) {
        this.setState({
            curentTypeFile: e.currentTarget.value,
            added: false,
            deleted: false
        });
    }

    addNewFile(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (this.state.curentTypeFile === '' || this.state.currentFile === null) {
            this.setState({
                error: true
            });
        } else {
            const newAttachement: IAttachement = { id: 0, url: '', attach_type: this.state.curentTypeFile, file: this.state.currentFile }
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
        const type: IOption = { attach_type: typeFile, typeConverted: this.getTypeConverted(typeFile) }
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
                    <div className="form-group mb-2">
                        <select id="file-select" className='form-control'>
                            {this.state.typesList.map(file => (
                                <option key={file.attach_type} value={file.attach_type} onClick={(e) => this.handleTypeChange(e)} >{file.typeConverted}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="file" className="label-file btn btn-info">Télécharger</label>
                        <input id="file" type="file" className="form-control-file input-file " onChange={(e) => this.handleImageChange(e)} />
                    </div>
                    <div className="form-group mb-2">
                        {this.state.currentFile !== null ? <button className='btn btn-success' onClick={(e) => this.addNewFile(e)}>Ajouter</button> : null}
                    </div>
                </form>
                <div>
                    {this.state.currentFile !== null ? <small className='display'>Fichier téléchargé : {this.state.currentFile.name}</small> : null}
                    {this.state.error ? <div className="alert alert-danger mt-2 text-center" role="alert"> Choisissez un fichier et un type de fichier S.V.P</div> : null}
                    {this.state.added ? <div className="alert alert-success mt-2 text-center" role="alert"> Ajout réussi !</div> : null}
                    {this.state.deleted ? <div className="alert alert-success mt-2 text-center" role="alert"> Suppression réussie !</div> : null}
                </div>
                <div>
                    <hr />
                    <h4>Mes fichiers téléchargés</h4>
                    {this.state.filesAdded.map(file => (
                        <div className='mb-2' key={file.id}><span className="badge badge-success">OK</span> <span className='text-info'>{this.getTypeConverted(file.attach_type)}</span> :
                   {file.file === null ? <span className='text-secondary'> <a href={file.url} target='_blank' rel="noopener noreferrer">voir</a></span> : <span className='text-secondary'> {file.file.name} </span>}
                            <button className='btn btn-sm btn-danger ml-1' onClick={(e) => this.removeElemFromListAdded(e, file)} > <FontAwesomeIcon icon={faTimesCircle} /></button> </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FileContainer;