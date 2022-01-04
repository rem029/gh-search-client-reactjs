import axios from 'axios';

import config from '../config/';

// const delay = (ms) =>
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve();
//     }, ms)
//   );

const useAxiosWithRedux = (actionBase = '') => {
  const get =
    (options = { urlEndPoint: '' }) =>
    async (dispatch) => {
      try {
        dispatch({ type: actionBase });
        const response = await axios.get(config.apiUrl + options.urlEndPoint);

        return handleSuccess(dispatch, { data: response.data });
      } catch (error) {
        return handleError(dispatch, error);
      }
    };

  const handleSuccess = (dispatch, data = {}) =>
    dispatch({ type: `${actionBase}_SUCCESS`, data: data.data, errors: null });
  const handleError = (dispatch, error) =>
    dispatch({ type: `${actionBase}_ERROR`, data: null, errors: error });

  return { get };
};

export default useAxiosWithRedux;
