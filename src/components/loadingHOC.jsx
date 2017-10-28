import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './loadingSpinner';

export default WrappedComponent => (
  class extends Component {
    componentDidMount() {
      const { selectedItem, apiCall, match } = this.props;
      if (selectedItem) {
        return apiCall(match.params.id);        
      }

      apiCall();
    }
    static propTypes = {
      apiCall: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired,
      list: PropTypes.array,
      history: PropTypes.object.isRequired,
    }
    render() {
      const { isLoading, selectedItem, list, history } = this.props;
      if (isLoading) {
        return <LoadingSpinner />;
      }

      if (selectedItem) {
        return <WrappedComponent />
      }

      return (
        <div className="columns is-multiline">
          { list.map(item => <WrappedComponent {...item} history={history} key={item.id} />) }
        </div>
      );
    }
  }
);
