import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import createRecuer from './reducers';
import rootSaga from './rootSaga';

const initialState = {};

const configuringStore = (initState = {}) => {  
    const allReducers = createRecuer();
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: allReducers , 
        middleware: [...middlewares],
        preloadedState: initState,
        devTools: process.env.NODE_ENV === 'production'? false : true,
    });
    sagaMiddleware.run(rootSaga);

    return store;
};

const reduxStore = configuringStore(initialState)

export default reduxStore;
