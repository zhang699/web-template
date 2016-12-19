import { API_REQUEST } from '../../middlewares/apiMiddleware';
import { createTypes } from 'reduxsauce';
import { Types as indicatorTypes } from '../indicator';


export const Types = createTypes(`
  FETCH_GITHUB_SUCCESS
  FETCH_GITHUB_FAILED
  FETCH_GITHUB_PROCESSING
`);

export function fetchGithub(payload) {
  return dispatch => dispatch({
    [API_REQUEST]: {
      types: [
        Types.FETCH_GITHUB_SUCCESS,
        Types.FETCH_GITHUB_FAILED,
        Types.FETCH_GITHUB_PROCESSING,
      ],
      indicatorTypes: (payload.indicator || true) ? [
        indicatorTypes.FETCHED_SUCCESS,
        indicatorTypes.FETCHED_FAILED,
        indicatorTypes.FETCHING
      ] : [],
      // body: {},
      // https://api.github.com/users/${userName}/repos
      url: `https://api.github.com/users/${payload.userName}/repos`,
      // if env variable is defined as API_HOST
      // entrypoint: 'api/Member/RegisterMemberByEmail',
      auth: false,
      json: true,
      method: 'GET',
      onSuccess: (data) => {
        // Things todo when success
      },
      onFailed: (data) => {
        // Things todo when success
      }
    }
  });
}
