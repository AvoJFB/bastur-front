import {
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
} from '../constants/actionTypes';

const customerReducer = (state = {
  items: [],
  isFetching: false,
  error: null,
}, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        items: action.customers,
        isFetching: false,
      };
    case GET_CUSTOMERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default customerReducer;
