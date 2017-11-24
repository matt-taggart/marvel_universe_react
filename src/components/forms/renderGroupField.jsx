import React from 'react';
import PropTypes from 'prop-types';

const RenderGroupField = ({ input, type, placeholder, meta: { error } }) => {
  const inputClasses = error ? 'input is-medium is-danger' : 'input is-medium';
  return (
    <div className="field">
      <p className="control">
        <input {...input} className={inputClasses} type={type} placeholder={placeholder} />
      </p>
      <p className="help is-danger">{ error }</p>
    </div>
  );
};

RenderGroupField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.shape({ error: PropTypes.string }).isRequired,
};

export default RenderGroupField;

