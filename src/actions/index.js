import Constants from './../constants'
import fetch from 'isomorphic-fetch'

export function loginAction(login, password){

  return (dispatch) =>{

    fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/validate",{

      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      },
      method:"POST",
      body:JSON.stringify({email:login, password})

    }).then((responce)=>{

      return responce.json();

    }).then((result)=>{

      console.log(result);
      if(result.status === "ok") {
        dispatch({
          type:Constants.LOGIN_SUCCESS,
          payload: result.data
        });
      } else {
        throw new Error(result.message || "Invalid login");
      }

    }).catch(err=>{

      dispatch({ 
        type:Constants.LOGIN_FAILED,
        payload: err.message
      });

    })
  }
  
}

export function getProfileAction(id){
  return (dispatch)=>{
    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`,{
      method:"GET",
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
      .then(responce=> {

        console.log(responce);
        return responce.json();
      })
      .then(result =>{

        dispatch({
          type:Constants.PROFILE_SUCCESS,
          payload:result.data
        })
      }).catch(err =>{

        console.log(err)
          dispatch({
            type:Constants.PROFILE_FAILED,
            payload:err
          })
      });
  }
}

export function getNewsAction(){
  return (dispatch)=>{
    fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/news",{
      method:"GET",
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
      .then(responce=> {

        console.log(responce);
        return responce.json();
      })
      .then(result =>{
        dispatch({
          type:Constants.NEWS_SUCCESS,
          payload:result
        })
      }).catch(err =>{

        console.log(err)
          dispatch({
            type:Constants.NEWS_FAILED,
            payload:err
          })
      });
  }
}