import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Immutable from 'immutable';

const RegistrationSuccessful = ({ user }) => (
  <div className="is-size-4 has-text-centered">
    Congratulations { user.get('user').name }!
    You have successfully registered with email address { user.get('user').email }.
    Click <Link to="/sign-in">here</Link> to sign in!
  </div>
);

RegistrationSuccessful.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default RegistrationSuccessful;
