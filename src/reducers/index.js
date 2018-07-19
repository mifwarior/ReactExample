import Constants from './../constants';

const reducer = (state = {loggined:false, errorLogin:false}, action)=>{
  
  if(action.type === Constants.LOGIN_SUCCESS) {
    return {
      ...state, 
      loggined:true,
      errorLogin:false,
      profile:action.payload
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
      errorLogin:false,
      profile:{}
    }
  }

  return state;
}

export default reducer;
