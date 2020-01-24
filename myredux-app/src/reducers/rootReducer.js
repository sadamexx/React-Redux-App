const initialState= {
    isLoading: false,
    vehicle: null,
    error: ''
  };
  
  export const reducer = (state = initialState, action ) => {
    switch(action.type){
  
      case "FETCHING_VEHICLE_START":
        return {
          ...state,
          isLoading: true
        }
  
        case "FETCHING_SUCCESS":
          return{
            ...state,
            isLoading: false,
            vehicle: action.payload
          }
  
      default:
        return state;
    }
  };