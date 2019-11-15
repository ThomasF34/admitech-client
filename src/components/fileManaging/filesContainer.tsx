import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/fileManaging.css';

interface IProps {

}

interface IFile {
    typeFile: string,
    file: any
}


interface IType {
    value: string,
    name: string
}

interface IState {
    typesList: Array<IType>,
    currentFile: any,
    curentTypeFile: string
    filesAdded: Array<IFile>,
    error: boolean,
    added: boolean,
    deleted: boolean
}
class FileContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            typesList: this.getListOfTypesOfFiles(),
            currentFile: null,
            curentTypeFile: '',
            filesAdded: [],
            error: false,
            added: false,
            deleted: false
        };
        this.removeElementInTypes = this.removeElementInTypes.bind(this);
    }

    getListOfTypesOfFiles() {

        const default_value: IType = { value: '', name: '--Type de fichier--' }
        const cover_letter: IType = { value: 'cover_letter', name: 'Lettre de motivation' }
        const cv: IType = { value: 'cv', name: 'CV' }
        const bac_marks: IType = { value: 'bac_marks', name: 'Notes du Bac' }
        const year_marks: IType = { value: 'year_marks', name: 'Notes' }
        const current_year_marks: IType = { value: 'current_year_marks', name: 'Notes année courante' }
        const notice_further_study: IType = { value: 'notice_further_study', name: 'Avis poursuite d\'études' }

        return [default_value, cover_letter, cv, bac_marks, year_marks, current_year_marks, notice_further_study];
    }

    getTypeByNameValue(value: string): IType {
        const list = this.getListOfTypesOfFiles()
        const elem = list.filter(function (type) {
            return type.value === value;
        });
        return elem[0];
    }

    getTypeByName(typeFile: string): IType {
        const list = this.getListOfTypesOfFiles()
        const elem = list.filter(function (type) {
            return type.name === typeFile;
        });
        return elem[0];
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
            const newFile: IFile = { typeFile: this.getTypeByNameValue(this.state.curentTypeFile).name, file: this.state.currentFile }
            this.removeElementInTypes();
            this.setState(previousState => ({
                filesAdded: [...previousState.filesAdded, newFile],
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
            return type.value !== currentFile;
        });

        this.setState({
            typesList: newList
        })
    }

    resetListOfTypes(typeFile: string) {
        const type = this.getTypeByName(typeFile);
        this.setState(previousState => ({
            typesList: [...previousState.typesList, type]
        }));
    }

    removeElemFromListAdded(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, file: IFile) {
        event.preventDefault();
        const listAdded = this.state.filesAdded;
        const newList = listAdded.filter(function (elem) {
            return elem.typeFile !== file.typeFile;
        });
        this.setState({
            filesAdded: newList,
            deleted: true,
            added: false
        });
        this.resetListOfTypes(file.typeFile);
    }

    render() {
        return (
            <div className='container bg-light mt-5 p-3'>
                <form className='needs-validation'>
                    <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                            <select id="file-select" className='form-control'>
                                {this.state.typesList.map(file => (
                                    <option value={file.value} onClick={(e) => this.handleTypeChange(e)} >{file.name}</option>
                                ))}
                            </select>
                            <label htmlFor="file" className="label-file btn btn-info ml-2 mr-2">Télécharger</label>
                            <input id="file" type="file" className="form-control-file input-file ml-3 mr-3"  onChange={(e) => this.handleImageChange(e)} />
                            
                            <button className='btn btn-success' onClick={(e) => this.addNewFile(e)}>Ajouter</button>
                        </div>
                    </div>
                </form>
                <div>
                {this.state.currentFile !== null? <small className='display'>Fichier téléchargé : {this.state.currentFile.name}</small>: null }
                    {this.state.error ? <div className="alert alert-danger mt-2 text-center" role="alert"> Choisissez un fichier et un type de fichier svp</div> : null}
                    {this.state.added ? <div className="alert alert-success mt-2 text-center" role="alert"> Ajout réussi !</div> : null}
                    {this.state.deleted ? <div className="alert alert-success mt-2 text-center" role="alert"> Suppression réussie !</div> : null}
                </div>
                <div>
                    <hr/>
                    <h4>Mes fichiers téléchargés</h4>
                    {this.state.filesAdded.map(file => (
                        <p> <span className='text-info'>{file.typeFile}</span> : <span className='text-secondary'>{file.file.name}</span> <button className='btn btn-danger ml-1' onClick={(e) => this.removeElemFromListAdded(e, file)} > X</button> </p>
                    ))}
                </div>
            </div>
        );
    }
}

export default FileContainer;

