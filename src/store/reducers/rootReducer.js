import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';

export default combineReducers({
    messages: messagesReducer
});