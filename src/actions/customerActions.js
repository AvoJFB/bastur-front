import axios from 'axios';

import {
  GET_CUSTOMERS_REQUEST,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_FAILURE,
} from '../constants/actionTypes';

export const getCustomersRequest = () => ({
  type: GET_CUSTOMERS_REQUEST,
});

export const getCustomersSuccess = customers => ({
  type: GET_CUSTOMERS_SUCCESS,
  customers,
});

export const getCustomersFailure = error => ({
  type: GET_CUSTOMERS_FAILURE,
  error,
});

export const getCustomers = () => (dispatch) => {
  dispatch(getCustomersRequest());
  return axios.get(`${process.env.API_BASE}/customers/name/`).then(
    res => dispatch(getCustomersSuccess(res.data)),
    error => dispatch(getCustomersFailure(error)),
  );
};
