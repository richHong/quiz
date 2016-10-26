import demoData from '../../data/demoData';

export default function quizReducer (state = demoData, action){
  switch (action.type) {
    case 'UPDATE_QUIZ_LIST':
      return action.quizList;
    case 'ADD_QUESTION':
      return state.map( quiz => {
        if (quiz.title === action.quiz.title){
          quiz.questions.push(action.question);
          quiz.saved = false;
        }
        return quiz;
      });
      
    case 'ADD_QUIZ':
      return [...state, action.quiz];
    case 'REMOVE_QUESTION':
      return state.map( quiz => {
        if (quiz.title === action.quiz.title){
          quiz.questions = quiz.questions.filter( (question, i, list) =>{
            return question.id !== action.question.id;
          });
          quiz.saved = false;
        }
        return quiz;
      });
    case 'EDIT_QUESTION':
      return state.map( quiz => {
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
    case 'REMOVE_QUIZ':
      return state.filter( quiz => {
        return quiz.title !== action.quiz.title;
      });
    default:
      return state;
  }
}
