import { createSelector } from "reselect";

const home = (state) => state.home;

export const selectHomeValue = createSelector([home], (home) => home.value);

export const selectUsers = createSelector([home], (home) => home.users);
