import * as actions from './constants';
import { successType, errorType } from '../../redux/helpers';

const initialState = {
  list: [],
  usersFlat: {},
  isLoading: false,
  errors: {},
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case successType(actions.GET_LIST):
      return {
        ...state, list: action.payload, usersFlat: action.flatData, errors: { GetList: null },
      };
    case errorType(actions.GET_LIST):
      return { ...state, errors: { GetList: action.error } };
    default:
      return state;
  }
};
