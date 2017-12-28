import React from 'react';
import PropTypes from 'prop-types';
import LoadingHOC from '../../containers/loadingHOC';
import ComicCard from '../cards/comicCard';
import Search from '../search';

const ComicList = ({ history, saveResource, showSaveItemErrorModal, data, isSignedIn }) => [
  <Search placeholder="Search comics" />,
  <div className="columns is-multiline">
    { data.map(item => (
      <ComicCard
        {...item}
        history={history}
        saveResource={saveResource}
        showSaveItemErrorModal={showSaveItemErrorModal}
        isSignedIn={isSignedIn}
        key={item.id}
      />
    )) }
  </div>,
];

ComicList.propTypes = {
  history: PropTypes.object.isRequired,
  saveResource: PropTypes.func.isRequired,
  showSaveItemErrorModal: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

export default LoadingHOC(ComicList);

