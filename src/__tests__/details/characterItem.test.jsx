import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharacterItem from '../../components/details/characterItem';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Character Item', () => {
  const props = {
    name: 'Spiderman',
    resourceURI: '/marvel.com/1234',
  };

  it('Renders correctly', () => {
    const wrapper = shallow(
      <CharacterItem
        name={props.name}
        resourceURI={props.resourceURI}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Link to correct url', () => {
    const wrapper = shallow(
      <CharacterItem
        name={props.name}
        resourceURI={props.resourceURI}
      />,
    );
    expect(wrapper.find('Link').prop('to')).toEqual('/characters/1234');
  });
});
