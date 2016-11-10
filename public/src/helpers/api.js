let counter = 0;

export function getQuizzes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(new Error('Failed to get quizzes. Attempting to connect again...'));
      }
      let quizList = JSON.parse(window.localStorage.getItem('quizzes'));
      return resolve(quizList);
    }, Math.random() * 3000);
  });
}
export function saveQuizzes(quizzes) {
  return new Promise((resolve, reject) => {
    const count = ++counter;
    console.log(`Start Save Request. #:${count}`);
    setTimeout(() => {
      if (Math.random() < 0.1 || !quizzes) {
        return reject(new Error('Failed to save quizzes. Please try saving again...'));
      }
      quizzes.forEach(quiz =>{
        quiz.saved = true;
      });
      window.localStorage.setItem('quizzes', JSON.stringify(quizzes));
      return resolve(count);
    }, Math.random() * 3000);
  });
}