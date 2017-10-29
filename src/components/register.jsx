import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { validateRegistration } from '../utils/validators';
import renderField from '../components/renderField';
import renderGroupField from '../components/renderGroupField';
import renderDropdown from '../components/renderDropdown';

const Register = ({ handleSubmit, register }) => {
  const submit = ({ name, email, password, age, gender }) => {
    const errors = validateRegistration(name, email, password, age, gender);

    if (Object.keys(errors).length) {
      throw new SubmissionError(errors);
    }

    register();
  };
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
