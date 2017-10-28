import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const renderField = ({ input, type, placeholder, className, meta: { error } }) => (
  <input {...input} className={className} type={type} placeholder={placeholder} />
);

const SignIn = ({ handleSubmit, signIn }) => {
  const submit = () => signIn();
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <form onSubmit={handleSubmit(submit)}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <Field
                name="username"
                className="input is-medium"
                type="email"
                placeholder="Email"
                component={renderField}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fa fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <Field
                name="password"
                className="input is-medium"
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
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'signIn',
})(SignIn);
