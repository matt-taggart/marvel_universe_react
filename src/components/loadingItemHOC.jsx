import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './loadingSpinner';

export default WrappedComponent => (
  class extends Component {
    componentDidMount() {
      const { apiCall, match } = this.props;

      apiCall(match.params.id);
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

      return Object.keys(data).length && <WrappedComponent {...data} />
    }
  }
);
