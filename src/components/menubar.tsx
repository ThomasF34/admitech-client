import React from 'react';
import logo from '../img/polytechLogo.svg';
import burger from '../img/burger.svg';
import cross from '../img/cross.svg';
import '../style/menubar.css';

interface IState {
    classNameBurger?: string;
}

interface IProps{}
class MenuBar extends React.Component<IProps,IState> {
  constructor(props :IProps) {
    super(props);
    this.state = {
      classNameBurger: 'hidden'
    };
    this.closeBurger = this.closeBurger.bind(this);
    this.openBurger = this.openBurger.bind(this);
  }
    

  closeBurger() {
    this.setState({classNameBurger:'hidden'});
  }
  openBurger() {
    this.setState({ classNameBurger: 'burger' });
  }

  render() {
    return (
      <div className='menuBarContent'>
        <div className={this.state.classNameBurger} id='burger'>
          <img src={cross} className='cross' onClick={this.closeBurger} alt='close menu.'/>
          <p className='burgerElement'>ACCUEIL</p>
          <p className='burgerElement'>CANDIDATER</p>
          <p className='burgerElement'>FORMATIONS</p>
          <p className='burgerElement'>CONTACT</p>
        </div>

        <div className='MenuBar'>
          <header className='App-header'>
            <img src={logo} className='polytechLogo' alt='Logo de polytech' />
            <p className='menuElement'>ACCUEIL</p>
            <p className='menuElement'>CANDIDATER</p>
            <p className='menuElement'>FORMATIONS</p>
            <p className='menuElement'>CONTACT</p>
            <img className="burgerIcon" src={burger} onClick={this.openBurger}/>
          </header>
        </div>
      </div>
    );
  }
}

export default MenuBar;