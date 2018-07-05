import Constants from './../constants'

export function loginAction(login, password){
  if(login === "admin" && password === "root"){
    return {
      type:Constants.LOGIN_SUCCESS
    }
  } else {
    return {
      type:Constants.LOGIN_FAILED
    }
  }
}