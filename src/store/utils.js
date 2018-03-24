export function createReducer(initialState, actionHandlers) {
	return function reducer(state = initialState, action) {
		if (actionHandlers.hasOwnProperty(action.type)) {
			return actionHandlers[action.type](state, action);
		}
		return state;
	}
}

export function makeActionCreator(type, ...argNames) {
	return function(...args) {
		let action = { type };
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index];
		});
		return action;
	}
}