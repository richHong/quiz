function getQuizzes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(new Error('Failed to get quizzes. Attempting to connect again...'));
      }
      let quizList = JSON.parse(window.localStorage.getItem('quizzes'));
      return resolve(quizList);
    }, Math.random() * 1000);
  });
}
function saveQuizzes(quizzes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(new Error('Faile to save quizzes. Attempting to save again...'));
      }
      quizzes.forEach(quiz =>{
        quiz.saved = true;
      });
      window.localStorage.setItem('quizzes', JSON.stringify(quizzes));
      return resolve();
    }, Math.random() * 1000);
  });
}
export function saveQuizList(quizzes){
  return function (dispatch) {
    return saveQuizzes(quizzes).then(
      () => {
        dispatch(getQuizList());
      }, 
      error => {
        alert(error);
        setTimeout(() => dispatch(saveQuizList()), 2000);
      });
  };
}
export function getQuizList(){
  return function (dispatch) {
    return getQuizzes().then(
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