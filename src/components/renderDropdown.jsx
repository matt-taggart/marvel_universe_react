import React from 'react';

export default ({ input, defaultValue, options, meta: { error } }) => {
  // const inputClasses = error ? 'input is-medium help is-danger' : 'input is-medium';
  return [
    <div className="select is-medium">
      <select {...input}>
        <option value="" selected disabled>{ defaultValue }</option>
        { options.map(name => <option key={name} value={name}>{ name }</option>) }
      </select>
    </div>,
    <p className="help is-danger">{ error }</p>,
  ];
};
