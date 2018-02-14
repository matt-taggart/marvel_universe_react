import React from 'react';
import PropTypes from 'prop-types';

const PaginationLink = ({ setPaginationAndSearch, letter, activeLetter }) => {
  const setLetterFunc = () => setPaginationAndSearch(letter);
  const letterClasses = (letter === activeLetter)
    ? 'pagination-link active-letter'
    : 'pagination-link';
  return (
    <li onClick={setLetterFunc}>
      <a className={letterClasses} aria-label={`Go to letter ${letter}`}>{ letter }</a>
    </li>
  );
};

PaginationLink.propTypes = {
  setPaginationAndSearch: PropTypes.func.isRequired,
  letter: PropTypes.string.isRequired,
  activeLetter: PropTypes.string.isRequired,
};

export default PaginationLink;
