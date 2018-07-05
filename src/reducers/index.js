import Constants from './../constants';

const reducer = (state = {loggined:false, errorLogin:false}, action)=>{
  
  if(action.type === Constants.LOGIN_SUCCESS) {
    return {
      ...state, 
      loggined:true,
      errorLogin:false
    }
  }
  
  if(action.type === Constants.LOGIN_FAILED) {
    return {
      ...state,
      loggined:false,
      errorLogin:true
    }
  }

  if(action.type === Constants.LOGOUT) {
    return {
      ...state,
      loggined:false,
      errorLogin:false
    }
  }

  return state;
}

export default reducer;
