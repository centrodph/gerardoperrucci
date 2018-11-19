import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import basicSaga from '../sagas/basicSaga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(basicSaga);
