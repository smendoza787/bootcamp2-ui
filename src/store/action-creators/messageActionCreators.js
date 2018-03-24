import { makeActionCreator } from '../utils';
import { messageActionTypes } from '../action-types';

export const addMessage = makeActionCreator(messageActionTypes.ADD_MESSAGE, 'message', 'user');
export const fetchMessages = makeActionCreator(messageActionTypes.FETCH_MESSAGES, 'results');