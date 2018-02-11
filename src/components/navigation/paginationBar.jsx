import React from 'react';
import PaginationLink from './paginationLink';
import Ellipsis from '../misc/ellipsis';
import LETTERS from '../../constants/letters'; 

export default ({ setLetter, display }) => {
  const componentsToRender = [];
  let currentIndex = 0;

  if (display.get('letter')) {
    currentIndex = LETTERS.findIndex(letter => (
      letter === display.get('letter')
    ));
  }

  if (currentIndex < 4) {
    componentsToRender.push(LETTERS
      .slice(0, 5)
      .map(letter => (
        <PaginationLink
          setLetter={setLetter}
          letter={letter}
          activeLetter={display.get('letter')}
          key={letter}
        />
      )));

    componentsToRender.push(<Ellipsis />);

    componentsToRender.push(LETTERS
      .slice(25)
      .map(letter => (
        <PaginationLink
          setLetter={setLetter}
          letter={letter}
          activeLetter={display.get('letter')}
          key={letter}
        />
      )));
  }

  if (currentIndex >= 4 && currentIndex < 21) {
    componentsToRender.push(LETTERS
      .slice(0, 1)
      .map(letter => (
        <PaginationLink
          setLetter={setLetter}
          letter={letter}
          activeLetter={display.get('letter')}
          key={letter}
        />
      )));

    componentsToRender.push(<Ellipsis />);

    componentsToRender.push(LETTERS
      .slice(currentIndex - 2, currentIndex + 3)
      .map(letter => (
        <PaginationLink
          setLetter={setLetter}
          letter={letter}
          activeLetter={display.get('letter')}
          key={letter}
        />
      )));

    componentsToRender.push(<Ellipsis />);

    componentsToRender.push(LETTERS
      .slice(25)
      .map(letter => (
        <PaginationLink
          setLetter={setLetter}
          letter={letter}
          activeLetter={display.get('letter')}
          key={letter}
        />
      )));
  }

  if (currentIndex >= 21) {
    componentsToRender.push(LETTERS
      .slice(0, 1)
      .map(letter => (
        <PaginationLink
          setLetter={setLetter}
          letter={letter}
          activeLetter={display.get('letter')}
          key={letter}
        />
      )));

    componentsToRender.push(<Ellipsis />);

    componentsToRender.push(LETTERS
      .slice(21, 26)
      .map(letter => (
        <PaginationLink
          setLetter={setLetter}
          letter={letter}
          activeLetter={display.get('letter')}
          key={letter}
        />
      )));
  }

  const setPrevLetter = () => setLetter((LETTERS[currentIndex - 1] || 'A'));
  const setNextLetter = () => setLetter((LETTERS[currentIndex + 1] || 'Z'));

  return (
    <nav className="pagination is-small " style={{ marginBottom: '2em' }} role="navigation" aria-label="pagination">
      <a className="pagination-previous" onClick={setPrevLetter}>Previous</a>
      <a className="pagination-next" onClick={setNextLetter}>Next page</a>
      <ul className="pagination-list">
        { componentsToRender }
      </ul>
    </nav>
  );
};
