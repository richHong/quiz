import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getQuizList, spinnerActive, spinnerInactive } from '../actions/actions';
import { saveQuizzes } from '../helpers/api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* saveQuizList(action) {
   try {
      yield put(spinnerActive());
      const count = yield call(saveQuizzes, action.quizzes);
      console.log(`Successful Save. #: ${count}`);
      yield put(getQuizList());
      yield put(spinnerInactive());
   } catch (e) {
      yield alert(e);
      yield put(spinnerInactive());
   } finally {
      console.log('End Save Request.');
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield* takeEvery('SAVE_REQUESTED', saveQuizList);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield* takeLatest('SAVE_REQUESTED', saveQuizList);
}

export default mySaga;