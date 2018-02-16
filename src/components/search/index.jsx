import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

const Search = ({ placeholder, searchFunc, display }) => (
  <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
      <div className="field column search-field">
        <div className="control">
          <input
            value={display.get('searchTerm')}
            className="input"
            type="text"
            placeholder={placeholder}
            onChange={searchFunc}
          />
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  searchFunc: PropTypes.func.isRequired,
  display: PropTypes.instanceOf(Immutable.Map).isRequired, 
};

export default Search;
