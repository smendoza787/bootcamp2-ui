import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import swapiReducer from './swapiReducer';

export default combineReducers({
    messages: messagesReducer,
    swapi: swapiReducer
});