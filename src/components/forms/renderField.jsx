import React from 'react';
import PropTypes from 'prop-types';

const RenderField = ({ input, type, placeholder, iconClasses, meta: { error } }) => {
  const inputClasses = error ? 'input is-medium is-danger' : 'input is-medium';
  return (
    <div className="field">
      <p className="control has-icons-left">
        <input {...input} className={inputClasses} type={type} placeholder={placeholder} />
        <span className="icon is-small is-left">
          <i className={iconClasses} />
        </span>
      </p>
      <p className="help is-danger">{ error }</p>
    </div>
  );
};

RenderField.propTypes = {
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
  iconClasses: PropTypes.string.isRequired,
  meta: PropTypes.shape({ error: PropTypes.string }).isRequired,
};

export default RenderField;
