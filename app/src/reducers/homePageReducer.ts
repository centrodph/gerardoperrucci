const INITIAL_STATE = {
  mess: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return {
        ...state,
        mess: [...state.mess, action.payload],
      };
    default:
      return state;
  }
};
