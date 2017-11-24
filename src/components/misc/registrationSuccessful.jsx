import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user }) => (
  <div className="is-size-4 has-text-centered">
    Congratulations { user.get('user').name }!
    You have successfully registered with email address { user.get('user').email }.
    Click <Link to="sign-in">here</Link> to sign in!
  </div>
);
