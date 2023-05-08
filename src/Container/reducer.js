import produce from 'immer'
import { SET_EMPLOYEES } from './constants';

export const initialState = {
  employees: []
}

const appReducer = (state = initialState, action) => 
    produce(state, (draft) => {
        switch (action.type) {
            case SET_EMPLOYEES:
                draft.employees = action.data
                break;
        }
    })

export default appReducer;