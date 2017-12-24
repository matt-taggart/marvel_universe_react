import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../components/misc/loadingSpinner';

export default WrappedComponent => (
  class extends Component {
    componentDidMount() {
      const { apiCall, match } = this.props;

      if (match) {
        apiCall(match.params.id);
      } else {
        apiCall();
      }
    }
    static propTypes = {
      apiCall: PropTypes.func.isRequired,
      match: PropTypes.object.isRequired,
      isLoading: PropTypes.bool.isRequired,
      data: PropTypes.object.isRequired,
    }
    render() {
      const { isLoading, data } = this.props;

      if (isLoading) {
        return <LoadingSpinner />;
      }

      return Object.keys(data).length && <WrappedComponent {...data} />;
    }
  }
);
