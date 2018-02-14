import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ placeholder, searchFunc }) => (
  <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
      <div className="field column search-field">
        <div className="control">
          <input className="input" type="text" placeholder={placeholder} onChange={searchFunc} />
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  searchFunc: PropTypes.func.isRequired,
};

export default Search;
