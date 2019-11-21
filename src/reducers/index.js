import { ADD_CAR, IS_LOADING } from "../constants/action-types";

const initialState = {
    cars: [],
    isLoading: false
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_CAR) {
        return Object.assign({}, state, {
            cars: state.cars.concat(action.payload)
        });
    }

    if (action.type === IS_LOADING) {
        return Object.assign({}, state, {
            isLoading: action.payload
        });
    }
    return state;
}

export default rootReducer;