import React from 'react';
import LoadingHOC from '../../containers/loadingHOC';

const CustomerProfile = ({ data: { name, email, gender, age }}) => {
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

export default LoadingHOC(CustomerProfile);