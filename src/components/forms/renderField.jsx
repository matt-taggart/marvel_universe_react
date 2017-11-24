import React from 'react';

export default ({ input, type, placeholder, iconClasses, meta: { error } }) => {
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
