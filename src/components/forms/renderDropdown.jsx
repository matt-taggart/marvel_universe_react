import React from 'react';

export default ({ input, defaultValue, options, meta: { error } }) => {
  const selectClasses = error ? 'select is-medium is-danger' : 'select is-medium';
  return (
    <div className="field">
      <p className="control">
        <div className={selectClasses}>
          <select {...input}>
            <option value="" selected disabled>{ defaultValue }</option>
            { options.map(name => <option key={name} value={name}>{ name }</option>) }
          </select>
        </div>
      </p>
      <p className="help is-danger">{ error }</p>
    </div>
  );
};
