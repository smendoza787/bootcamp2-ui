export const swapiHandlers = {
  FETCH_CHARACTERS_SUCCESS: (state, action) => Object.assign({}, state, { fetchedCharacters: action.results }),
  FETCH_CHARACTERS_FAILURE: (state, action) => Object.assign({}, state, { fetchedCharacters: action.results })
}