import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
    filesAdded: Array<IFile>
}
class FileContainer extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            typesList: this.getListOfTypesOfFiles(),
            currentFile: null,
            curentTypeFile: '',
            filesAdded: []
        };
        this.removeElementInTypes = this.removeElementInTypes.bind(this);
    }

    getListOfTypesOfFiles() {

        const cover_letter: IType = { value: 'cover_letter', name: 'Lette de motivation' }
        const cv: IType = { value: 'cv', name: 'CV' }
        const bac_marks: IType = { value: 'bac_marks', name: 'Notes du Bac' }
        const year_marks: IType = { value: 'year_marks', name: 'Notes' }
        const current_year_marks: IType = { value: 'current_year_marks', name: 'Notes année courante' }
        const notice_further_study: IType = { value: 'notice_further_study', name: 'Avis poursuite d\'études' }

        return [cover_letter, cv, bac_marks, year_marks, current_year_marks, notice_further_study];
    }

    getTypeByNameType(typeFile: string): IType {
        const list = this.getListOfTypesOfFiles()
        const elem = list.filter(function (type) {
            return type.value === typeFile;
        });

        return elem[0];
    }


    handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value)

        let reader = new FileReader();
        let file = e.target.files![0];
        this.setState({
            currentFile: file
        });
        reader.readAsDataURL(file);
    }

    handleTypeChange(e: React.MouseEvent<HTMLOptionElement, MouseEvent>) {
        console.log(e.currentTarget.value)
        this.setState({
            curentTypeFile: e.currentTarget.value
        });
    }

    addNewFile(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        const newFile: IFile = { typeFile: this.getTypeByNameType(this.state.curentTypeFile).name, file: this.state.currentFile }
        this.setState(previousState => ({
            filesAdded: [...previousState.filesAdded, newFile],
            curentTypeFile: '',
            currentFile: null
        }));
        this.removeElementInTypes();
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
        const type = this.getTypeByNameType(typeFile);
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
            filesAdded: newList
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
                                <option value="">--Type de fichier--</option>
                                {this.state.typesList.map(file => (
                                    <option value={file.value} onClick={(e) => this.handleTypeChange(e)} >{file.name}</option>
                                ))}
                            </select>
                            <input type="file" className="form-control-file ml-3 mr-3" id="exampleFormControlFile1" onChange={(e) => this.handleImageChange(e)} />
                            <button className='btn btn-outline-secondary btn-md' onClick={(e) => this.addNewFile(e)}>Ajouter</button>
                        </div>
                    </div>

                    <div>
                        {this.state.filesAdded.map(file => (
                            <p>{file.typeFile} -- {file.file.name} <button className='btn btn-danger' onClick={(e) => this.removeElemFromListAdded(e, file)} > X</button> </p>
                        ))}
                    </div>

                </form>
            </div>
        );
    }
}

export default FileContainer;

