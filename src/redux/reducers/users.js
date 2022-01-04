const initialState = {
  success: true,
  loading: false,
  data: null,
  errors: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_SEARCH':
      return { ...state, ...initialState, loading: true };
    case 'GET_USER_SEARCH_SUCCESS':
      return {
        ...state,
        ...initialState,
        loading: false,
        success: true,
        data: action.data,
      };
    case 'GET_USER_SEARCH_ERROR':
      return {
        ...state,
        ...initialState,
        loading: false,
        success: false,
        errors: action.error,
      };
    default:
      return state;
  }
};

export default usersReducer;
