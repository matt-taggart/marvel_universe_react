import React from 'react';

export default ({ input, type, placeholder, meta: { error } }) => {
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
