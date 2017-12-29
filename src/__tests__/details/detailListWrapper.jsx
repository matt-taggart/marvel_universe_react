import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DetailListWrapper from '../../components/details/detailListWrapper';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Detail List Wrapper', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(
      <DetailListWrapper heading="Spiderman">
        <div>Hello world!</div>
      </DetailListWrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
