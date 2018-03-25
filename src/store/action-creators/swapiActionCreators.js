import { makeActionCreator } from '../utils';
import { swapiActionTypes } from '../action-types';

const fetchSwapiCharacters = makeActionCreator(swapiActionTypes.FETCH_CHARACTERS_REQUESTED);
const receiveSwapiCharacters = makeActionCreator(swapiActionTypes.FETCH_CHARACTERS_SUCCESS, 'results');

export {
  fetchSwapiCharacters,
  receiveSwapiCharacters
}