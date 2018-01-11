import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreatorCard from '../../components/cards/creatorCard';

Enzyme.configure({ adapter: new Adapter() })

describe('Creator Card', () => {
  const props = {
    id: 123,
    fullName: 'Stan Lee',
    comics: { items: [] },
    thumbnail: {
      path: 'test',
      extension: 'com',
    },
    history: {
      location: { pathname: '/creators/:id'},
      push: jest.fn(),
    },
    saveResource: jest.fn(),
    showSaveItemErrorModal: jest.fn(),
    isSignedIn: true,
  };

  it('Should render correctly', () => {
    const wrapper = shallow(
      <CreatorCard
        id={props.id}
        fullName={props.fullName}
        comics={props.comics}
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
      <CreatorCard
        id={props.id}
        fullName={props.fullName}
        comics={props.comics}
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
        name: 'Stan Lee',
        resourceType: 'creators/:id' 
      });
  });

  it('Should call more details button on click', () => {
    const wrapper = shallow(
      <CreatorCard
        id={props.id}
        fullName={props.fullName}
        comics={props.comics}
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
