import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { validateCredentials } from '../../utils/validators';
import renderField from '../forms/renderField';

const SignIn = ({ handleSubmit, display, signIn }) => {
  const submit = ({ email, password }) => {
    const errors = validateCredentials(email, password);

    if (Object.keys(errors).length) {
      throw new SubmissionError(errors);
    }

    signIn();
  };
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <form onSubmit={handleSubmit(submit)}>
          <Field
            name="email"
            type="text"
            placeholder="Email"
            iconClasses="fa fa-envelope"
            component={renderField}
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            iconClasses="fa fa-lock"
            component={renderField}
          />
          { display.get('apiError').message && (
            <div className="field">
              <div className="message is-danger">
                <div className="message-body">
                  { display.get('apiError').message }
                </div>
              </div>
            </div>
          )}
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
                <span>
                  Don't have an account yet? Click <Link to="register">here</Link> to register!
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  display: PropTypes.instanceOf(Immutable.Map).isRequired,
  signIn: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signIn',
})(SignIn);
