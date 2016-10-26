import demoData from '../../data/demoData';

export default function quizReducer (state = demoData, action){
  switch (action.type) {
    case 'UPDATE_QUIZ_LIST':
      return action.quizList;
    case 'ADD_QUESTION':
      let newState = state.map( quiz => {
        if (quiz.title === action.quiz.title){
          quiz.questions.push(action.question);
        }
        return quiz;
      });
      return newState;
    case 'ADD_QUIZ':
      return [...state, action.quiz];
    case 'REMOVE_QUESTION':
      let removeState = state.map( quiz => {
        if (quiz.title === action.quiz.title){
          quiz.questions.forEach( (question, i, list) =>{
            if(question.question === action.question.question){
              list.splice(i,1);
            }
          });
        }
        return quiz;
      });
      return removeState;
    case 'EDIT_QUESTION':
      let editState = state.map( quiz => {
        if (quiz.title === action.quiz.title){
          quiz.questions.forEach( (question, i, list) =>{
            console.log(question);
            console.log(action.oldQuestion)
            if(question.question === action.oldQuestion.question){
              list.splice(i,1,action.newQuestion);
            }
          });
        }
        return quiz;
      });
      return editState;
    default:
      return state;
  };
};
