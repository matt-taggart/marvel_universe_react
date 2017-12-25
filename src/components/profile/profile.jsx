import React from 'react';
import PropTypes from 'prop-types';
import LoadingHOC from '../../containers/loadingHOC';

const CustomerProfile = ({ data: { name, email, gender, age } }) => {
  return (
    <div className="Profile">
      <h1 className="has-text-centered is-size-3">My Profile</h1>
      <div className="has-text-centered">
        <i className="fa fa-user-circle fa-5x" aria-hidden="true" />
        <div>
          <span><em>Username:</em></span>
          <span>{ name }</span>
        </div>
        <div>
          <span><em>Email:</em></span>
          <span>{ email }</span>
        </div>
        <div>
          <span><em>Gender:</em></span>
          <span>{ gender }</span>
        </div>
        <div>
          <span><em>Age:</em></span>
          <span>{ age }</span>
        </div>
      </div>
    </div>
  );
};

CustomerProfile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.arrayOf(PropTypes.object).isRequired,
    age: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};


export default LoadingHOC(CustomerProfile);
