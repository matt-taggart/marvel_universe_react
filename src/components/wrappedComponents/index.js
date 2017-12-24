import React from 'react';
import LoadingSpinner from '../misc/loadingSpinner';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import LoadingHOC from '../../containers/loadingHOC';
import Profile from '../profile/profile';
import CharacterCard from '../cards/characterCard';
import ComicCard from '../cards/comicCard';
import CreatorCard from '../cards/creatorCard';
import EventCard from '../cards/eventCard';
import SeriesCard from '../cards/seriesCard';
import SelectedCharacter from '../details/selectedCharacter';
import SelectedComic from '../details/selectedComic';
import SelectedCreator from '../details/selectedCreator';
import SelectedEvent from '../details/selectedEvent';
import SelectedSeries from '../details/selectedSeries';

export const enhance = compose(
  lifecycle({
    componentDidMount() {
      const { apiCall, getUser } = this.props;
      apiCall();
      getUser();
    }
  }),
  branch(
    props => props.isLoading || !Object.keys(props.data).length,
    renderComponent(LoadingSpinner),
  ),
);

export const CharacterList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <CharacterCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export const ComicList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <ComicCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export const CreatorList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <CreatorCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export const EventList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <EventCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export const SeriesList = ({ item, history, saveResource, data }) => (
  <div className="columns is-multiline">
    { data.map(item => <SeriesCard {...item} history={history} saveResource={saveResource} key={item.id} />) }
  </div>
);

export const CharacterListWithData = enhance(CharacterList);
export const ComicListWithData = enhance(ComicList);
export const CreatorListWithData = enhance(CreatorList);
export const EventListWithData = enhance(EventList);
export const SeriesListWithData = enhance(SeriesList);
