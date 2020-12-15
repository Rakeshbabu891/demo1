import HomeActionType from "./home.types";

const INITIAL_STATE = {
  value: 1,
  users: [],
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionType.ADD:
      return {
        ...state,
        value: state.value + 1,
      };
    case HomeActionType.MINUS:
      return {
        ...state,
        value: state.value - 1,
      };
    case HomeActionType.FETCH_USERS_START:
      return {
        ...state,
      };
    case HomeActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case HomeActionType.FETCH_USERS_ERROR:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
