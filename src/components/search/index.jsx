import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ placeholder }) => (
  <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
      <div className="field column search-field">
        <div className="control">
          <input className="input is-medium" type="text" placeholder={placeholder} />
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;
