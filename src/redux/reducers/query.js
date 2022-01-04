const initialState = '';
const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUERY_UPDATE':
      return action.query;
    default:
      return state;
  }
};

export default queryReducer;
