import React from 'react';

export default ({ setLetter, letter, activeLetter }) => {
  const setLetterFunc = () => setLetter(letter);
  const letterClasses = (letter === activeLetter)
    ? 'pagination-link active-letter'
    : 'pagination-link';
  return (
    <li onClick={setLetterFunc}>
      <a className={letterClasses} aria-label={`Go to letter ${letter}`}>{ letter }</a>
    </li>
  );
};
