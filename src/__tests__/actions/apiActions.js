import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as ApiActions from '../../actions/api';
import * as CharacterConstants from '../../constants/characters';
import * as ComicConstants from '../../constants/comics';
import * as CreatorConstants from '../../constants/creators';
import * as EventConstants from '../../constants/events';
import * as SeriesConstants from '../../constants/series';
import * as UserConstants from '../../constants/user';
import * as AuthConstants from '../../constants/auth';
import * as DisplayConstants from '../../constants/display';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Actions', () => {
  const id = 123;
  const payload = {
    id: 123,
    name: 'spiderman',
    resourceType: 'character',
  };
  const mockEvent = {
    target: {
      value: 'test',
    },
  };

  it('Create an action to get characters', () => {
    const expectedAction = {
      type: CharacterConstants.GET_CHARACTERS,
    };

    expect(ApiActions.getCharacters()).toEqual(expectedAction);
  });

  it('Create an action to get comics', () => {
    const expectedAction = {
      type: ComicConstants.GET_COMICS,
    };

    expect(ApiActions.getComics()).toEqual(expectedAction);
  });

  it('Create an action to get creators', () => {
    const expectedAction = {
      type: CreatorConstants.GET_CREATORS,
    };

    expect(ApiActions.getCreators()).toEqual(expectedAction);
  });

  it('Create an action to get events', () => {
    const expectedAction = {
      type: EventConstants.GET_EVENTS,
    };

    expect(ApiActions.getEvents()).toEqual(expectedAction);
  });

  it('Create an action to get series', () => {
    const expectedAction = {
      type: SeriesConstants.GET_SERIES,
    };

    expect(ApiActions.getSeries()).toEqual(expectedAction);
  });

  it('Create an action to get user', () => {
    const expectedAction = {
      type: UserConstants.GET_USER,
    };

    expect(ApiActions.getUser()).toEqual(expectedAction);
  });

  it('Create an action to selected character', () => {
    const expectedAction = {
      type: CharacterConstants.GET_SELECTED_CHARACTER,
      id,
    };

    expect(ApiActions.getSelectedCharacter(id)).toEqual(expectedAction);
  });

  it('Create an action to get selected comic', () => {
    const expectedAction = {
      type: ComicConstants.GET_SELECTED_COMIC,
      id,
    };

    expect(ApiActions.getSelectedComic(id)).toEqual(expectedAction);
  });

  it('Create an action to get selected creator', () => {
    const expectedAction = {
      type: CreatorConstants.GET_SELECTED_CREATOR,
      id,
    };

    expect(ApiActions.getSelectedCreator(id)).toEqual(expectedAction);
  });

  it('Create an action to get selected event', () => {
    const expectedAction = {
      type: EventConstants.GET_SELECTED_EVENT,
      id,
    };

    expect(ApiActions.getSelectedEvent(id)).toEqual(expectedAction);
  });

  it('Create an action to get selected series', () => {
    const expectedAction = {
      type: SeriesConstants.GET_SELECTED_SERIES,
      id,
    };

    expect(ApiActions.getSelectedSeries(id)).toEqual(expectedAction);
  });

  it('Create an action to save resource', () => {
    const expectedAction = {
      type: UserConstants.SAVE_RESOURCE,
      payload,
    };

    expect(ApiActions.saveResource(payload)).toEqual(expectedAction);
  });

  it('Create an action to sign in user', () => {
    const expectedAction = {
      type: AuthConstants.SIGN_IN_ATTEMPT,
    };

    expect(ApiActions.signIn()).toEqual(expectedAction);
  });

  it('Create an action to register user', () => {
    const expectedAction = {
      type: UserConstants.REGISTRATION_ATTEMPT,
    };

    expect(ApiActions.register()).toEqual(expectedAction);
  });

  it('Create an action to logout', () => {
    const expectedAction = {
      type: AuthConstants.LOGOUT,
    };

    expect(ApiActions.logout()).toEqual(expectedAction);
  });

  it('Create an action to set application error', () => {
    const expectedAction = {
      type: DisplayConstants.SET_APPLICATION_ERROR,
      error: {
        err: 'sample error',
        stack: 'sample stack',
      },
    };

    expect(ApiActions.setApplicationError({
      err: 'sample error',
      stack: 'sample stack',
    })).toEqual(expectedAction);
  });

  it('Create an action to clear api errors', () => {
    const expectedAction = {
      type: DisplayConstants.CLEAR_API_ERRORS,
    };

    expect(ApiActions.clearApiErrors()).toEqual(expectedAction);
  });

  it('Create an action to search characters', () => {
    const expectedAction = {
      type: CharacterConstants.SEARCH_CHARACTERS,
      searchTerm: 'test',
    };

    expect(ApiActions.searchCharacters(mockEvent)).toEqual(expectedAction);
  });

  it('Create an action to search comics', () => {
    const expectedAction = {
      type: ComicConstants.SEARCH_COMICS,
      searchTerm: 'test',
    };

    expect(ApiActions.searchComics(mockEvent)).toEqual(expectedAction);
  });

  it('Create an action to search creators', () => {
    const expectedAction = {
      type: CreatorConstants.SEARCH_CREATORS,
      searchTerm: 'test',
    };

    expect(ApiActions.searchCreators(mockEvent)).toEqual(expectedAction);
  });

  it('Create an action to search events', () => {
    const expectedAction = {
      type: EventConstants.SEARCH_EVENTS,
      searchTerm: 'test',
    };

    expect(ApiActions.searchEvents(mockEvent)).toEqual(expectedAction);
  });

  it('Create an action to search series', () => {
    const expectedAction = {
      type: SeriesConstants.SEARCH_SERIES,
      searchTerm: 'test',
    };

    expect(ApiActions.searchSeries(mockEvent)).toEqual(expectedAction);
  });
});
