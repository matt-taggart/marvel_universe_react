import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComicItem from '../../components/details/comicItem';

Enzyme.configure({ adapter: new Adapter() })

describe('Comic Item', () => {
  const props = {
    name: 'Spiderman',
    resourceURI: '/marvel.com/1234',
  };

  it('Should render correctly', () => {
    const wrapper = shallow(
      <ComicItem
        name={props.name}
        resourceURI={props.resourceURI}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should link to correct url', () => {
    const wrapper = shallow(
      <ComicItem
        name={props.name}
        resourceURI={props.resourceURI}
      />,
    );
    expect(wrapper.find('Link').prop('to')).toEqual('/comics/1234');
  });
});
