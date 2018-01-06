import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as DisplayActions from '../../actions/display';
import * as DisplayConstants from '../../constants/display';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Display Actions', () => {
  it('Create an action for hiding flash messages', () => {
    const expectedAction = {
      type: DisplayConstants.HIDE_FLASH_MESSAGE,
    };

    expect(DisplayActions.hideFlashMessage()).toEqual(expectedAction);
  });

  it('Create an action for showing save item error modal', () => {
    const expectedAction = {
      type: DisplayConstants.SHOW_SAVE_ITEM_ERROR_MODAL,
    };

    expect(DisplayActions.showSaveItemErrorModal()).toEqual(expectedAction);
  });

  it('Create an action for hiding save item error modal', () => {
    const expectedAction = {
      type: DisplayConstants.HIDE_SAVE_ITEM_ERROR_MODAL,
    };

    expect(DisplayActions.hideSaveItemErrorModal()).toEqual(expectedAction);
  });
});
