import { createReducer } from 'reduxsauce';
import { Types } from '../../actions/api/exampleAction';

const INITIAL_STATE = {
  data: null
};

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_GITHUB_SUCCESS]: (state = INITIAL_STATE, action) => {
    const { data } = action;
    return {
      ...state,
      waiting: false,
      data,
    };
  },
  [Types.FETCH_GITHUB_FAILED]: (state = INITIAL_STATE, action) => {
    const { data } = action;
    return {
      ...state,
      waiting: false,
      data,
    };
  },
  [Types.FETCH_GITHUB_PROCESSING]: (state = INITIAL_STATE, action) => {
    const { data } = action;
    return {
      ...state,
      waiting: true
    };
  },
});
