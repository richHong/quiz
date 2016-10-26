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