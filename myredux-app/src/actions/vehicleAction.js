import axios from "axios";

export const fetchVehicle = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_VEHICLE_START"});
    axios
    .get('https://ghibliapi.herokuapp.com/vehicles')
    .then (res =>{
      console.log(res.data)
      dispatch({ type: 'FETCHING_SUCCESS', payload: res.data});
    })
    .catch(err => {
      dispatch({ type: "FETCHING_FAILURE", payload: err.response });
      })
  }
};