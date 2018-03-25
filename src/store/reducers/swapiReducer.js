import { createReducer } from '../utils';
import { swapiHandlers } from '../action-handlers';

const initialState = {
    fetchedCharacters: []
};

export default createReducer(initialState, swapiHandlers);