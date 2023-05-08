import { FETCH_EMPLOYEES, SET_EMPLOYEES } from "./constants";

export function getEmployeesAction() {
    return {
        type: FETCH_EMPLOYEES
    };
}

export function setEmployeesAction(data) {
    return {
        type: SET_EMPLOYEES,
        data
    };
}
