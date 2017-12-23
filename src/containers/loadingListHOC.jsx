import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../components/misc/loadingSpinner';

export default WrappedComponent => (
  class extends Component {
    componentDidMount() {
      const { apiCall } = this.props;

      apiCall();
    }
    static propTypes = {
      apiCall: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired,
      list: PropTypes.array,
      history: PropTypes.object.isRequired,
    }
    render() {
      const { isLoading, list, history, saveResource } = this.props;

      if (isLoading) {
        return <LoadingSpinner />;
      }

      return (
        <div className="columns is-multiline">
          { list.map(item => <WrappedComponent {...item} history={history} saveResource={saveResource} key={item.id} />) }
        </div>
      );
    }
  }
);
