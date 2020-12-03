import { createStore } from 'redux';

const initialState = {
    loading : false,
    name : "Muhammad Ridho",
    address : "Bogor"
}

const reducer = (state = initialState, action) => {
    if (action.type === "SET_LOADING") {
        return {
            ...state,
            loading : action.value
        }
    };
    if (action.type === "NAMA") {
        return {
            ...state,
            name : "Abu-Abu"
        }
    };
    return state;
};

const store = createStore(reducer);

export default store;