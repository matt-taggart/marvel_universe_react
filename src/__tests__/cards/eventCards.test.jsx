import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EventCard from '../../components/cards/eventCard';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Event Card', () => {
  const props = {
    id: 123,
    title: 'Spiderman',
    description: 'Spider-Man is a fictional superhero by Marvel Comics',
    start: '2013-06-28T16:31:24-0400',
    end: '2013-06-28T16:31:24-0400',
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

  it('Renders correctly', () => {
    const wrapper = shallow(
      <EventCard
        id={props.id}
        title={props.title}
        description={props.description}
        start={props.start}
        end={props.end}
        thumbnail={props.thumbnail}
        history={props.history}
        saveResource={props.saveResource}
        showSaveItemErrorModal={props.showSaveItemErrorModal}
        isSignedIn={props.isSignedIn}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Call save button on click', () => {
    const wrapper = shallow(
      <EventCard
        id={props.id}
        title={props.title}
        description={props.description}
        start={props.start}
        end={props.end}
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

  it('Call more details button on click', () => {
    const wrapper = shallow(
      <EventCard
        id={props.id}
        title={props.title}
        description={props.description}
        start={props.start}
        end={props.end}
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
