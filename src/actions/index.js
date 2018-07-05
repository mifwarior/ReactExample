import Constants from './../constants'

export function loginAction(login, password){
  return { 
    type: Constants.LOGIN,
    payload: { 
      login, 
      password 
    }
  };
}