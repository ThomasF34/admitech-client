import React from 'react';
import '../style/main.css';
import PropTypes from 'prop-types';

const MainTitle = ({ name }:any) => (
  <div className="container-title">
    <div className="decor">
      <div className="decor-line">
      </div>
    </div>
    <div className="name-mainTitle">{name}</div>
    <div className="decor">
      <div className="decor-line">
      </div>
    </div>
  </div>
);

MainTitle.propTypes = {
  name: PropTypes.string.isRequired
};

export default MainTitle;