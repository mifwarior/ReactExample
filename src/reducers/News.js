import CombineChain from "./utils/CombineChain";
import Constants from './../constants';

const chain = new CombineChain();

chain.add(Constants.NEWS_SUCCESS,(state, action)=>{

  return {
    ...action.payload
  }
}).add(Constants.NEWS_FAILED, (state, action)=>{

  return {
    ...state,    
    status:"err",
    message:action.payload
  }
})

const reducer = (
  state = {
    status:"",
    data:[]
  },
  action)=>{

  return chain.reduce(state, action);
}

export default reducer;