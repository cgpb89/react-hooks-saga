import { get } from 'lodash';

export const isSearchLoading = state => get(state, 'searchReducer.isLoading');
export const movieResults = state => get(state, 'searchReducer.movieResults.Search');
export const movieResult = state => get(state, 'searchReducer.movieResult');