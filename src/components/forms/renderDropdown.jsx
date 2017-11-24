import React from 'react';
import PropTypes from 'prop-types';

const RenderDropdown = ({ input, defaultValue, options, meta: { error } }) => {
  const selectClasses = error ? 'select is-medium is-danger' : 'select is-medium';
  return (
    <div className="field">
      <div className="control">
        <div className={selectClasses}>
          <select {...input}>
            <option value="" defaultValue={defaultValue} disabled>{ defaultValue }</option>
            { options.map(name => <option key={name} value={name}>{ name }</option>) }
          </select>
        </div>  
      </div>
      <p className="help is-danger">{ error }</p>
    </div>
  );
};

RenderDropdown.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  meta: PropTypes.shape({ error: PropTypes.string }).isRequired,
};

export default RenderDropdown;
