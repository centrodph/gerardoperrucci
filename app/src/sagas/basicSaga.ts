import { call, put, takeEvery } from 'redux-saga/effects';

const fetchContent = () => {
  return fetch("http://gerardoperrucci.com/wp-json/")
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
};
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  try {
    const result = yield call(fetchContent)
    yield put({ type: 'USER_FETCH_SUCCEEDED', payload: { working: JSON.stringify(result) } });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
