import React from 'react';
import '../../style/connexion.css';
import '../../style/container.css';
import ConnexionNav from './connexionNav';
import SignInForm from './signInForm';
import SignUpForm from './sighUpForm';

interface IProps {
  text: string,
  image: string,
}

interface IState {
  text: string,
  image: string,
  form: any
}

class ConnexionContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: this.props.text,
      image: this.props.image,
      form: <SignInForm />
    };
  }

  showComponent = (isSignInActive: boolean) => {
    if (!isSignInActive)
      this.setState({
        form: <SignUpForm />
      });
    else
      this.setState({
        form: <SignInForm />
      });
  }

  render() {
    return (

      <div className="root fill">
        <div className="row fill no-gutters justify-content-end ">

          <div className="d-none d-md-block col-md-8 " >
            <div className="image-container">
              <img src={this.props.image} className="img-background" alt="polytech" />
              <div className="centered-text">
                <h1 className="display-1"><u>{this.props.text}</u></h1>
                <h1 className="display-4">PLATEFORME CANDIDATURE POLYTECH</h1>
              </div>
            </div>
          </div>

          <div className="customCol col-sm-12 col-md-4 shadow-lg bg-light ">
            <ConnexionNav handleClickFct={this.showComponent} isSignInActive={true} />
            {this.state.form}
          </div>
        </div>
      </div>
    );
  }
}


export default ConnexionContainer;