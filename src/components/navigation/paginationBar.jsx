import React from 'react';
import PaginationLink from './paginationLink';
import letters from '../../constants/letters'; 

export default ({ setLetter, display }) => {
  const currentIndex = letters.findIndex(letter => letter === display.get('letter'));
  const setPrevLetter = () => setLetter(letters[currentIndex - 1]);
  const setNextLetter = () => setLetter(letters[currentIndex + 1]);
  return (
    <nav className="pagination is-small " style={{ marginBottom: '2em' }} role="navigation" aria-label="pagination">
      <a className="pagination-previous" onClick={setPrevLetter}>Previous</a>
      <a className="pagination-next" onClick={setNextLetter}>Next page</a>
      <ul className="pagination-list">
        { letters.slice(0, 1).map(letter => (
          <PaginationLink
            setLetter={setLetter}
            letter={letter}
            activeLetter={display.get('letter')}
            key={letter}
          />
        ))}
        <li><span className="pagination-ellipsis">&hellip;</span></li>
        { letters.slice(11, 16).map(letter => (
          <PaginationLink
            setLetter={setLetter}
            letter={letter}
            activeLetter={display.get('letter')}
            key={letter}
          />
        ))}
        <li><span className="pagination-ellipsis">&hellip;</span></li>
        { letters.slice(25).map(letter => (
          <PaginationLink
            setLetter={setLetter}
            letter={letter}
            activeLetter={display.get('letter')}
            key={letter}
          />
        ))}
      </ul>
    </nav>  
  );
};
