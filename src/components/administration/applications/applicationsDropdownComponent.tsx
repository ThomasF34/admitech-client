import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/applications/applicationsDropdownComponent.css';

let categories = new Map<number, string>();
categories.set(0, 'Tous');
categories.set(1, 'Brouillon');
categories.set(2, 'Soumis');
categories.set(3, 'Dossier incomplet');
categories.set(4, 'Dossier complet');
categories.set(5, 'QCM à effectuer');
categories.set(6, 'QCM effectué');
categories.set(7, 'Entretien à programmer');
categories.set(8, 'Entretien programmé');
categories.set(9, 'Entretien passé');
categories.set(10, 'Admis');
categories.set(11, 'Refusé');


interface IProps {
  handleClickCategory: any
}

interface IState {
  showMenu: boolean,
  currentCategory: string|undefined,
}

class ApplicationsDropdownComponent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    
    this.state = {
      showMenu: false,
      currentCategory: categories.get(0),
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.setCategoryMenu = this.setCategoryMenu.bind(this);
  }
  
  showMenu(event: any) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  setCategoryMenu(index: number) {
    this.props.handleClickCategory(index);
    this.setState({currentCategory: categories.get(index)});
  }

  render() {
    return (
      <div className="dropdown">
        <button id="buttonDropdownMenu" onClick={this.showMenu} className="btn btn-secondary btn-sm dropdown-toggle">
          {this.state.currentCategory}
        </button>
        {
          this.state.showMenu
            ? (
              <div className="dropdown-content">
                {Array.from(categories.keys()).map(index => 
                  this.state.currentCategory !== categories.get(index) 
                    ? (
                      <div onClick={() => this.setCategoryMenu(index)}> {categories.get(index)} </div>
                    ) 
                    : (
                      null
                    )
                )}
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default ApplicationsDropdownComponent;
