import HomeActionType from "./home.types";

export const add = () => ({
  type: HomeActionType.ADD,
});

export const minus = () => ({
  type: HomeActionType.MINUS,
});

export const fetchUserStart = () => ({
  type: HomeActionType.FETCH_USERS_START,
});

export const fetchUserSuccess = (users) => ({
  type: HomeActionType.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUserError = (error) => ({
  type: HomeActionType.FETCH_USERS_ERROR,
  payload: error,
});
