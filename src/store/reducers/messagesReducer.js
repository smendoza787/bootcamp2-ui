import { createReducer } from '../utils';
import { messageHandlers } from '../action-handlers';

const initialState = {
    allMessages: []
};

export default createReducer(initialState, messageHandlers);