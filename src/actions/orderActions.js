import axios from 'axios';

import {
  SET_ORDER,
  SET_ORDER_BY,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from '../constants/actionTypes';

export const setOrderBy = orderBy => ({
  type: SET_ORDER_BY,
  orderBy,
});

export const setOrder = order => ({
  type: SET_ORDER,
  order,
});

export const getOrdersRequest = () => ({
  type: GET_ORDERS_REQUEST,
});

export const getOrdersSuccess = orders => ({
  type: GET_ORDERS_SUCCESS,
  orders,
});

export const getOrdersFailure = error => ({
  type: GET_ORDERS_FAILURE,
  error,
});

export const getOrders = () => (dispatch) => {
  dispatch(getOrdersRequest());
  return axios.get(`${process.env.API_BASE}/order`).then(
    orders => dispatch(getOrdersSuccess(orders.data.orders)),
    error => dispatch(getOrdersFailure(error)),
  );
};
