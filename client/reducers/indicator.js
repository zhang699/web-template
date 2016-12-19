import { createReducer } from 'reduxsauce';
import { Types, INDICATOR_INITIAL, INDICATOR_FETCHING, INDICATOR_FETCHED_SUCCESS, INDICATOR_FETCHED_FAILED  } from '../actions/indicator';

const INITIAL_STATE = {
  status: INDICATOR_INITIAL
};

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_INITIAL]: (state = INITIAL_STATE, action) => {
    const { status } = action;
    return {
      ...state,
      status: INDICATOR_INITIAL,
    };
  },
  [Types.FETCHING]: (state = INITIAL_STATE, action) => {
    const { status } = action;
    return {
      ...state,
      status: INDICATOR_FETCHING,
    };
  },
  [Types.FETCHED_SUCCESS]: (state = INITIAL_STATE, action) => {
    const { status } = action;
    return {
      ...state,
      status: INDICATOR_FETCHED_SUCCESS,
    };
  },
  [Types.FETCHED_FAILED]: (state = INITIAL_STATE, action) => {
    const { status } = action;
    return {
      ...state,
      status: INDICATOR_FETCHED_FAILED
    };
  },
});
