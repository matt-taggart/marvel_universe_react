import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { validateCredentials } from '../utils/validators';

const renderField = ({ input, type, placeholder, meta: { error } }) => {
  const inputClasses = error ? 'input is-medium help is-danger' : 'input is-medium';
  return [
    <input {...input} className={inputClasses} type={type} placeholder={placeholder} />,
    <p className="help is-danger">{ error }</p>,
  ];
};

const SignIn = ({ handleSubmit, signIn }) => {
  const submit = ({ username, password }) => {
    const errors = validateCredentials(username, password);

    if (Object.keys(errors).length) {
      throw new SubmissionError(errors);
    }

    signIn();
  };
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <form onSubmit={handleSubmit(submit)}>
          <div className="field">
            <p className="control has-icons-left">
              <Field
                name="username"
                type="text"
                placeholder="Email"
                component={renderField}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                component={renderField}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-dark is-medium">
                Sign In
              </button>
            </p>
          </div>
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <span>Don't have an account yet? Click <Link to="register">here</Link> to register!</span>
              </div>
            </div>
          </div>
          {/* <div className="field">
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'signIn',
})(SignIn);
