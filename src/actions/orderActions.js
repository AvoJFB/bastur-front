import { SET_ORDER, SET_ORDER_BY } from '../constants/actionTypes';

export const setOrderBy = orderBy => ({
  type: SET_ORDER_BY,
  orderBy,
});

export const setOrder = order => ({
  type: SET_ORDER,
  order,
});

