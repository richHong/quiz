export default function exampleReducer (state = {
  example: 'Hello World!'
}, action){
  switch (action.type) {
    default:
      return state;
  };
};
