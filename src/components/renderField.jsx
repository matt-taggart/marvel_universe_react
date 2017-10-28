import React from 'react';

export default ({ input, type, placeholder, meta: { error } }) => {
  const inputClasses = error ? 'input is-medium help is-danger' : 'input is-medium';
  return [
    <input {...input} className={inputClasses} type={type} placeholder={placeholder} />,
    <p className="help is-danger">{ error }</p>,
  ];
};
