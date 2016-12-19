import { createTypes } from 'reduxsauce';

export const INDICATOR_INITIAL = Symbol('INDICATOR_INITIAL');
export const INDICATOR_FETCHING = Symbol('INDICATOR_FETCHING');
export const INDICATOR_FETCHED_SUCCESS = Symbol('INDICATOR_FETCHED_SUCCESS');
export const INDICATOR_FETCHED_FAILED = Symbol('INDICATOR_FETCHED_FAILED');

export const Types = createTypes(`
  FETCH_INITIAL
  FETCHING
  FETCHED_SUCCESS
  FETCHED_FAILED
`);


export const fetchInitial = () => ({
  type: Types.FETCH_INITIAL
})

export const fetching =  () => ({
  type: Types.FETCHING
})

export const fetched = result => {
  return (result === INDICATOR_FETCHED_SUCCESS) ? {
    type: Types.FETCHED_SUCCESS
  } : {
    type: Types.FETCHED_FAILED
  }
}
