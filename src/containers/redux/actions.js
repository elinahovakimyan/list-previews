import * as actions from './constants';

import { requestType } from '../../redux/helpers';

export const getList = () => ({
  type: requestType(actions.GET_LIST),
});
