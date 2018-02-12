import React from 'react';
import PaginationLink from './paginationLink';
import Ellipsis from '../misc/ellipsis';
import LETTERS from '../../constants/letters'; 

export default ({ setLetter, display }) => {
  let componentToRender = null;
  let currentIndex = -1;
  let prevIndex = 0;

  const renderStartOfList = () => (
    <ul className="pagination-list">
      {
        LETTERS
          .slice(0, 5)
          .map(letter => (
            <PaginationLink
              setLetter={setLetter}
              letter={letter}
              activeLetter={display.get('letter')}
              key={letter}
            />
          ))
      }
      <Ellipsis />
      {
        LETTERS
          .slice(25)
          .map(letter => (
            <PaginationLink
              setLetter={setLetter}
              letter={letter}
              activeLetter={display.get('letter')}
              key={letter}
            />
          ))
      }
    </ul>
  );

  const renderMiddleOfList = index => (
    <ul className="pagination-list">
      {
        LETTERS
          .slice(0, 1)
          .map(letter => (
            <PaginationLink
              setLetter={setLetter}
              letter={letter}
              activeLetter={display.get('letter')}
              key={letter}
            />
          ))
      }
      <Ellipsis />
      {
        LETTERS
          .slice(index - 2, index + 3)
          .map(letter => (
            <PaginationLink
              setLetter={setLetter}
              letter={letter}
              activeLetter={display.get('letter')}
              key={letter}
            />
          ))
      }
      <Ellipsis />
      {
        LETTERS
          .slice(25)
          .map(letter => (
            <PaginationLink
              setLetter={setLetter}
              letter={letter}
              activeLetter={display.get('letter')}
              key={letter}
            />
          ))
      }
    </ul>
  );

  const renderEndOfList = () => (
    <ul className="pagination-list">
      { LETTERS
        .slice(0, 1)
        .map(letter => (
          <PaginationLink
            setLetter={setLetter}
            letter={letter}
            activeLetter={display.get('letter')}
            key={letter}
          />
        )) }
      <Ellipsis />
      { LETTERS
        .slice(21, 26)
        .map(letter => (
          <PaginationLink
            setLetter={setLetter}
            letter={letter}
            activeLetter={display.get('letter')}
            key={letter}
          />
        )) }
    </ul>
  );

  if (display.get('letter')) {
    currentIndex = LETTERS.findIndex(letter => (
      letter === display.get('letter')
    ));
    prevIndex = LETTERS.findIndex(letter => (
      letter === display.get('prevLetter')
    ));
  }


  if (currentIndex < 4) {
    componentToRender = renderStartOfList();
  }

  if (currentIndex >= 4 && currentIndex < 21) {
    componentToRender = renderMiddleOfList(currentIndex);
  }

  if (currentIndex === 21 && prevIndex > currentIndex) {
    componentToRender = renderMiddleOfList(currentIndex);
  }

  if (currentIndex === 21 && prevIndex < currentIndex) {
    componentToRender = renderEndOfList();
  }

  if (currentIndex > 21) {
    componentToRender = renderEndOfList();
  }

  const setPrevLetter = () => setLetter((LETTERS[currentIndex - 1] || 'A'));
  const setNextLetter = () => setLetter((LETTERS[currentIndex + 1] || 'Z'));

  return (
    <nav className="pagination is-small" role="navigation" aria-label="pagination">
      <button className="pagination-previous" disabled={!display.get('letter') || display.get('letter') === 'A'} onClick={setPrevLetter}>Previous</button>
      <button className="pagination-next" disabled={display.get('letter') === 'Z'} onClick={setNextLetter}>Next page</button>
      { componentToRender }
    </nav>
  );
};
