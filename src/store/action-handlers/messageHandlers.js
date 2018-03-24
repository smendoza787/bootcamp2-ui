export const messageHandlers = {
    FETCH_MESSAGES: (state, action) => Object.assign({}, state, { fetchedMessages: action.results }),
    ADD_MESSAGE: (state, action) => Object.assign({}, state, { allMessages:[action.message, ...state.allMessages]  })
}