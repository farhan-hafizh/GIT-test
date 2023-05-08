import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectApp = (state) => state.app || initialState;

const selectEmployees = createSelector(selectApp, (state) => state.employees);

export { selectEmployees };