import axios from 'axios';

export const FETCH_TRIVIA_START = 'FETCH_TRIVIA_START';
export const FETCH_TRIVIA_SUCCESS = 'FETCH_TRIVIA_SUCCESS';
export const FETCH_TRIVIA_FAILURE = 'FETCH_TRIVIA_FAILURE';

export const getTrivia = () => dispatch => {
    dispatch({ type: FETCH_TRIVIA_START });
    axios
        .get('http://jservice.io/api/random')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_TRIVIA_SUCCESS, payload: response.data});
        })    
        .catch(err => {
                dispatch({ type: FETCH_TRIVIA_FAILURE, payload: err.response });
        });
};