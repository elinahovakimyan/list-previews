import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import axios from 'axios';
import { Alert } from 'react-native';

import * as actions from './constants';
import {
  requestType, errorType, successType,
} from '../../redux/helpers';

const BASE_URL = 'https://gist.githubusercontent.com';

function getList() {
  return axios.get(`${BASE_URL}/jiromm/231f1d224f2dfdea643969f6e9f94c21/raw/50a9fd21d6bdb7e361fa03e2f47528cc72d0c27d/list.json`);
}

function* handleGetList() {
  try {
    const { status, data } = yield call(getList);

    if (status >= 200 && status < 300) {
      const list = data?.list || [];
      const flatData = {};

      list.forEach((el) => {
        flatData[el.id] = el;
      });

      yield put({
        type: successType(actions.GET_LIST),
        payload: list,
        flatData,
      });
    } else {
      yield put({
        type: errorType(actions.GET_LIST),
        error: 'Unknown Error',
      });
    }
  } catch (err) {
    console.warn('Error :', err.response);
    const errorMessage = 'Unable to get the list';
    yield put({
      type: errorType(actions.GET_LIST),
      err: JSON.stringify(err.response?.data) || errorMessage,
    });

    Alert.alert(errorMessage, err.response?.data ? JSON.stringify(err.response?.data) : '');
  }
}


export default all([
  takeLatest(requestType(actions.GET_LIST), handleGetList),
]);
