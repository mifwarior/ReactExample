import CombineChain from "./utils/CombineChain";
import Constants from './../constants';

const chain = new CombineChain();

chain.add(Constants.LOGIN_SUCCESS,(state, action)=>{

  return {
    ...state, 
    loggined:true,
    errorLogin:false,
    id:action.payload.id
  }
}).add(Constants.LOGIN_FAILED, (state, action)=>{

  return {
    ...state,
    loggined:false,
    errorLogin:true
  }
}).add(Constants.LOGUOT,(state, action)=>{

  const {id, ...rest} = state;
  return {
    ...rest,
    loggined:false,
    errorLogin:false,
  }
});


const reducer = (state = {loggined:false, errorLogin:false}, action)=>{
  return chain.reduce(state, action);
}

export default reducer;