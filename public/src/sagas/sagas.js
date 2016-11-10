import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getQuizList, spinnerActive, spinnerInactive } from '../actions/actions';
import { saveQuizzes } from '../helpers/api';

function* saveQuizList(action) {
  try {
      yield put(spinnerActive());
      const count = yield call(saveQuizzes, action.quizzes);
      console.log(`***Successful Save. #:${count}`);
      yield put(getQuizList());
   } catch (e) {
      yield alert(e);
   } finally {
      yield put(spinnerInactive());
      console.log('End Save Request.');
   }
}
export function* conSaga() {
  yield* takeEvery('CONCURRENT_SAVE_REQUESTED', saveQuizList);
}
export function* saveSaga() {
  yield* takeLatest('SAVE_REQUESTED', saveQuizList);
}

