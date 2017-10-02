import initialState from '../store/initialState';
import { SET_ORDER, SET_ORDER_BY } from '../constants/actionTypes';

const orderReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default orderReducer;
