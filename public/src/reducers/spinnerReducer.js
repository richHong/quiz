export default function spinnerReducer (state = false, action){
  switch (action.type){
    case 'SPINNER_ACTIVE':
      return true;
    case 'SPINNER_INACTIVE':
      return false;
    default:
      return state;
  }
}