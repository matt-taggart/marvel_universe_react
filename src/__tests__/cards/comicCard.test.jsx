import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComicCard from '../../components/cards/comicCard';

Enzyme.configure({ adapter: new Adapter() })

describe('Comic Card', () => {
  const props = {
    id: 123,
    title: 'Spiderman',
    issueNumber: 4,
    series: { name: 'Spiderman vs Venom' },
    prices: [ { price: 15 } ],
    thumbnail: {
      path: 'test',
      extension: 'com',
    },
    history: {
      location: { pathname: '/comics/:id'},
      push: jest.fn(),
    },
    saveResource: jest.fn(),
    showSaveItemErrorModal: jest.fn(),
    isSignedIn: true,
  };

  it('Should render correctly', () => {
    const wrapper = shallow(
      <ComicCard
        id={props.id}
        title={props.title}
        issueNumber={props.issueNumber}
        series={props.series}
        prices={props.prices}
        thumbnail={props.thumbnail}
        history={props.history}
        saveResource={props.saveResource}
        showSaveItemErrorModal={props.showSaveItemErrorModal}
        isSignedIn={props.isSignedIn}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call save button on click when logged in', () => {
    const wrapper = shallow(
      <ComicCard
        id={props.id}
        title={props.title}
        issueNumber={props.issueNumber}
        series={props.series}
        prices={props.prices}
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
        resourceType: 'comics/:id' 
      });
  });

  it('Should call more details button on click', () => {
    const wrapper = shallow(
      <ComicCard
        id={props.id}
        title={props.title}
        issueNumber={props.issueNumber}
        series={props.series}
        prices={props.prices}
        thumbnail={props.thumbnail}
        history={props.history}
        saveResource={props.saveResource}
        showSaveItemErrorModal={props.showSaveItemErrorModal}
        isSignedIn={props.isSignedIn}
      />,
    );
    wrapper.find(".details-btn").simulate('click');
    expect(props.history.push.mock.calls.length).toBe(1);
    expect(props.history.push.mock.calls[0][0]).toBe('/comics/123');    
  });
});
