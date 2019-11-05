import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import search from '../../img/icons/glass-search.png';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="row justify-content-end search-container">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend2">
            <img src={search} alt="search-icon" />
          </span>
        </div>
        <input className="form-control search-bar" type="text" placeholder="Rechercher..." aria-label="Search" />
      </div>
    );
  }
}

export default SearchBar;

