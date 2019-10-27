import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './components/menubar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});