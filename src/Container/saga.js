import { put, takeLatest, call } from "redux-saga/effects";
import { FETCH_EMPLOYEES } from "./constants";
import { setEmployeesAction } from "./action";
import { getEmployees } from "../Domain/api";


export function* doGetEmployees({}) {
    try {
            const response = yield call(getEmployees);
            console.log(response);
            yield put(setEmployeesAction(response.data.data));
        } catch (error) {
            yield put({ type: "GET_EMPLOYEES_ERROR", payload: error });
        }
}

export default function* appSaga() {
    yield takeLatest(FETCH_EMPLOYEES, doGetEmployees)
};