import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { validateCredentials } from '../utils/validators';
import renderField from '../components/renderField';
import renderDropdown from '../components/renderDropdown';

const Register = ({ handleSubmit, register }) => {
  const submit = ({ email, password }) => {
    const errors = validateCredentials(email, password);

    if (Object.keys(errors).length) {
      throw new SubmissionError(errors);
    }

    register();
  };
  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <form onSubmit={handleSubmit(submit)}>
          <div className="field">
            <p className="control has-icons-left">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                component={renderField}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <Field
                name="email"
                type="text"
                placeholder="Email"
                component={renderField}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
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
                <i className="fa fa-lock" />
              </span>
            </p>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <Field
                name="age"
                type="text"
                placeholder="Age"
                component={renderField}
              />
            </div>
            <div className="control">
              <div className="select is-medium">
                <Field
                  name="gender"
                  defaultValue="Gender"
                  options={['Male', 'Female']}
                  component={renderDropdown}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-dark is-medium">
                Register
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'register',
})(Register);
