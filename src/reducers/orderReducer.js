import {
  SET_ORDER,
  SET_ORDER_BY,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from '../constants/actionTypes';

const orderReducer = (state = {
  items: [],
  isFetching: false,
  error: null,
  orderBy: 'sold_at',
  order: 'desc',
}, action) => {
  switch (action.type) {
    case SET_ORDER_BY:
      return {
        ...state,
        orderBy: action.orderBy,
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.order,
      };
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        items: action.orders,
        isFetching: false,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default orderReducer;
