import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/applications/applicationsDropdownComponent.css';
import {categories} from "../../utils/categoriesEnum";

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
              <div className="dropdown-content" id="dropdown-content-application">
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
