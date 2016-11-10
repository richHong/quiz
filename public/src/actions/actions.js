import { getQuizzes } from '../helpers/api';

export function getQuizList(){
  return dispatch => {
    return getQuizzes()
    .then(
      quizzes => {
        dispatch(updateQuizList(quizzes));
      }, 
      error => {
        alert(error);
        setTimeout(() => dispatch(getQuizList()), 2000);
    });
  };
}
export function updateQuizList (quizList) {
  return {
    type: 'UPDATE_QUIZ_LIST',
    quizList
  };
}
export function addQuiz (quiz) {
  return {
    type: 'ADD_QUIZ',
    quiz
  };
}
export function addQuestion(question, quiz) {
  return {
    type: 'ADD_QUESTION',
    question,
    quiz
  };
}
export function editQuestion(newQuestion, oldQuestion, quiz) {
  return {
    type: 'EDIT_QUESTION',
    oldQuestion,
    newQuestion,
    quiz
  };
}
export function removeQuestion(question, quiz) {
  return {
    type: 'REMOVE_QUESTION',
    question,
    quiz
  };
}
export function removeQuiz(quiz) {
  return {
    type: 'REMOVE_QUIZ',
    quiz
  };
}
export function loadDemo() {
  return {
    type: 'LOAD_DEMO'
  };
}
export function requestSave(quizzes) {
  return {
    type: 'SAVE_REQUESTED', 
    quizzes
  };
}
export function spinnerActive() {
  return {
    type: 'SPINNER_ACTIVE'
  };
}
export function spinnerInactive() {
  return {
    type: 'SPINNER_INACTIVE'
  };
}