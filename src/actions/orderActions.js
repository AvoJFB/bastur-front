import axios from 'axios';

import {
  SET_ORDER,
  SET_ORDER_BY,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
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
    res => dispatch(getOrdersSuccess(res.data.orders)),
    error => dispatch(getOrdersFailure(error)),
  );
};

export const createOrderRequest = () => ({
  type: CREATE_ORDER_REQUEST,
});

export const createOrderSuccess = order => ({
  type: CREATE_ORDER_SUCCESS,
  order,
});

export const createOrderFailure = error => ({
  type: CREATE_ORDER_FAILURE,
  error,
});

export const createOrder = order => (dispatch) => {
  dispatch(createOrderRequest());
  return axios.post(`${process.env.API_BASE}/order`, order).then(
    res => dispatch(createOrderSuccess(res.data.order)),
    error => dispatch(createOrderFailure(error)),
  );
};
