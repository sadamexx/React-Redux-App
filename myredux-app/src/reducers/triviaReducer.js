import {
    FETCH_TRIVIA_START,
    FETCH_TRIVIA_SUCCESS,
    FETCH_TRIVIA_FAILURE
} from '../actions';

const initialState = {
    trivia: null,
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TRIVIA_START:
            return{
                ...state,
                isFetching: true
            };
        case FETCH_TRIVIA_SUCCESS:
            return{
                ...state,
                trivia: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_TRIVIA_FAILURE:
            return{
                ...state,
                trivia: action.payload,
                isFetching: false,
                error: ''
            };
        default:
            return state;           
    }
};

export default reducer;