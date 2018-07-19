import CombineChain from "./utils/CombineChain";
import Constants from './../constants';

const chain = new CombineChain();

chain.add(Constants.PROFILE_SUCCESS,(state, action)=>{

  return {
    ...action.payload
  }
}).add(Constants.PROFILE_FAILED, (state, action)=>{

  return {
    error:true,
    message:action.payload
  }
})

const reducer = (
  state = {
    userId:-1,
    city:"",
    languages:[],
    social:[]
  },
  action)=>{

  return chain.reduce(state, action);
}

export default reducer;