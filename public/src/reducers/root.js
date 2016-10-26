import demoData from '../../data/demoData';

export default function quizReducer (state = demoData, action){
  switch (action.type) {
    case 'UPDATE_QUIZ_LIST':
      return action.quizList;
    case 'ADD_QUESTION':
      let newState = state.map( quiz => {
        if (quiz.title === action.quiz.title){
          quiz.questions.push(action.question);
          quiz.saved = false;
        }
        return quiz;
      });
      return newState;
    case 'ADD_QUIZ':
      return [...state, action.quiz];
    case 'REMOVE_QUESTION':
      let removeState = state.map( quiz => {
        if (quiz.title === action.quiz.title){
          let newQuestions = quiz.questions.filter( (question, i, list) =>{
            return question.id !== action.question.id;
          });
          quiz.questions = newQuestions;
          quiz.saved = false;
        }
        return quiz;
      });
      return removeState;
    case 'EDIT_QUESTION':
      let editState = state.map( quiz => {
        if (quiz.title === action.quiz.title){
          quiz.questions.forEach( (question, i, list) =>{
            if(question.id === action.oldQuestion.id){
              list.splice(i,1,action.newQuestion);
              quiz.saved = false;
            }
          });
        }
        return quiz;
      });
      return editState;
    case 'REMOVE_QUIZ':
      let quizState = state.filter( quiz => {
        return quiz.title !== action.quiz.title;
      });
      return quizState;
    default:
      return state;
  };
};
