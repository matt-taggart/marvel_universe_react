import React, { Component } from 'react';
import LoadingSpinner from '../components/misc/loadingSpinner';

const InfiniteScrollHOC = WrappedComponent => (
  class InfiniteScroll extends Component {
    state = { itemsLoaded: 0 }
    componentDidMount() {
      window.addEventListener('scroll', this.scrollToBottom, false);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollToBottom, false);
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.display.get('total') !== nextProps.display.get('total')) {
        this.setState({ itemsLoaded: 0 });
      }
    }
    makeApiCall = (apiCall, display, itemsLoaded) => {
      let searchTerm = '';

      if (display.get('searchTerm')) {
        searchTerm = display.get('searchTerm')
      }
      if (display.get('letter')) {
        searchTerm = display.get('letter');
      }
      apiCall(itemsLoaded, searchTerm);
    }
    scrollToBottom = () => {
      const { display, apiCall } = this.props;

      if ((document.body.scrollHeight - window.innerHeight) === window.pageYOffset) {
        const additionalResultsAvailable = display.get('count') < (display.get('total') - this.state.itemsLoaded)
        if (additionalResultsAvailable && !display.get('loading')) {
          this.setState({
            itemsLoaded: this.state.itemsLoaded + display.get('count'),
          });
          this.makeApiCall(apiCall, display, this.state.itemsLoaded);
        }
      }
    }
    render() {
      return (
        <div>
          <div>{ this.props.display.get('loading') && <LoadingSpinner /> }</div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
);

export default InfiniteScrollHOC;
