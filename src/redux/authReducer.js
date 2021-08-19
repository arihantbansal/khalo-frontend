import { SET_CURRENT_USER, USER_LOADING } from "./actionTypes";

const initialState = {
	isAuthenticated: false,
	user: {},
	loading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !action.payload, // Check if this works
				user: action.payload,
			};
		case USER_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default authReducer;
