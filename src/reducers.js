import { combineReducers } from "@reduxjs/toolkit";
import { enableES5 } from "immer";

import appReducer from './Container/reducer'

const temporaryReducers = {
	app: appReducer
};

export default function createRecuer(injectedReducer = {}) {
	enableES5();
	return combineReducers({
		...temporaryReducers,
		...injectedReducer,
	});
}