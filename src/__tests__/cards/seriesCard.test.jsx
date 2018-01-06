import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SeriesCard from '../../components/cards/seriesCard';

Enzyme.configure({ adapter: new Adapter() })

describe('Series Card', () => {
  const props = {
    id: 123,
    title: 'Spiderman',
    description: 'Spider-Man is a fictional superhero by Marvel Comics',
    thumbnail: {
      path: 'test',
      extension: 'com',
    },
    history: {
      location: { pathname: '/events/:id'},
      push: jest.fn(),
    },
    saveResource: jest.fn(),
    showSaveItemErrorModal: jest.fn(),
    isSignedIn: true,
  };

  it('Should render correctly', () => {
    const wrapper = shallow(
      <SeriesCard
        id={props.id}
        title={props.title}
        description='Spider-Man is a fictional superhero by Marvel Comics'
        thumbnail={props.thumbnail}
        history={props.history}
        saveResource={props.saveResource}
        showSaveItemErrorModal={props.showSaveItemErrorModal}
        isSignedIn={props.isSignedIn}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call save button on click', () => {
    const wrapper = shallow(
      <SeriesCard
        id={props.id}
        title={props.title}
        description='Spider-Man is a fictional superhero by Marvel Comics'
        thumbnail={props.thumbnail}
        history={props.history}
        saveResource={props.saveResource}
        showSaveItemErrorModal={props.showSaveItemErrorModal}
        isSignedIn={props.isSignedIn}
      />,
    );
    wrapper.find(".save-btn").simulate('click');
    expect(props.saveResource.mock.calls.length).toBe(1);
    expect(props.saveResource.mock.calls[0][0])
      .toEqual({ 
        id: 123,
        name: 'Spiderman',
        resourceType: 'events/:id' 
      });
  });

  it('Should call more details button on click', () => {
    const wrapper = shallow(
      <SeriesCard
        id={props.id}
        title={props.title}
        description='Spider-Man is a fictional superhero by Marvel Comics'
        thumbnail={props.thumbnail}
        history={props.history}
        saveResource={props.saveResource}
        showSaveItemErrorModal={props.showSaveItemErrorModal}
        isSignedIn={props.isSignedIn}
      />,
    );
    wrapper.find(".details-btn").simulate('click');
    expect(props.saveResource.mock.calls.length).toBe(1);
  });
});
