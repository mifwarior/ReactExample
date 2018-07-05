import Constants from './../constants';

const reducer = (state = {loggined:false, errorLogin:false}, action)=>{
  if(action.type === Constants.LOGIN) {
    
    const {login, password} = action.payload;

    if(login === "admin" && password === "root"){
      return {
        ...state,
        loggined:true,
        errorLogin:false
      }
    } else {
      return {
        ...state,
        errorLogin:true
      }
    }
  }
  return state;
}

export default reducer;