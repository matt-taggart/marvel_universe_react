import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { validateRegistration } from '../utils/validators';
import renderField from '../components/renderField';
import renderGroupField from '../components/renderGroupField';
import renderDropdown from '../components/renderDropdown';

const Register = ({ handleSubmit, display, register, isLoading }) => {
  const submit = ({ name, email, password, age, gender }) => {
    const errors = validateRegistration(name, email, password, age, gender);

    if (Object.keys(errors).length) {
      throw new SubmissionError(errors);
    }

    register();
  };
  const buttonClasses = isLoading
    ? 'button disabled is-dark is-medium is-loading'
    : 'button is-dark is-medium';

  return (
    <div className="columns is-centered">
      <div className="column is-two-thirds">
        <form onSubmit={handleSubmit(submit)}>
          <Field
            name="name"
            type="text"
            placeholder="Name"
            iconClasses="fa fa-user"
            component={renderField}
          />
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
          <div className="field is-horizontal">
            <div className="field-body">
              <Field
                name="age"
                type="text"
                placeholder="Age"
                component={renderGroupField}
              />
              <Field
                name="gender"
                defaultValue="Gender"
                options={['Male', 'Female']}
                component={renderDropdown}
              />
            </div>
          </div>
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
              <button className={buttonClasses}>
                Register
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  display: PropTypes.instanceOf(Immutable.Map).isRequired,
  register: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'register',
})(Register);
