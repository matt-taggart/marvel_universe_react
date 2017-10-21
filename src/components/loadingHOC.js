import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './loadingSpinner';

export default WrappedComponent => (
  class extends Component {
    componentDidMount() {
      this.props.apiCall();
    }
    static propTypes = {
      apiCall: PropTypes.function.isRequired,
      isLoading: PropTypes.boolean.isRequired,
      list: PropTypes.array.isRequired,
    }
    render() {
      const { isLoading, list } = this.props;
      if (isLoading) {
        return <LoadingSpinner />;
      }

      return (
        <div className="columns is-multiline">
          { list.map(item => <WrappedComponent {...item} key={item.id} />) }
        </div>
      );
    }
  }
);
