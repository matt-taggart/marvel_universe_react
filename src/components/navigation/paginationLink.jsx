import React from 'react';

export default ({ setPaginationAndSearch, letter, activeLetter }) => {
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
