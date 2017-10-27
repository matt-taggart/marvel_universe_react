import React from 'react';

const SignIn = () => (
  <div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input className="input is-medium" type="text" placeholder="Email" />
      </div>
    </div>
    <div className="field">
      <label className="label">Password</label>
      <div className="control">
        <input className="input is-medium" type="password" placeholder="Password" />
      </div>
    </div>
  </div>
);

export default SignIn;
