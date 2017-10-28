import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, type, placeholder, className, meta: { error } }) => (
  <input {...input} className={className} type={type} placeholder={placeholder}></input> 
);

const SignIn = () => (
  <div className="columns is-centered">
    <div className="column is-two-thirds">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <Field
            name="email"
            className="input is-medium"
            type="text"
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
    </div>
  </div>
);

export default reduxForm({
  form: 'signIn',
})(SignIn);
