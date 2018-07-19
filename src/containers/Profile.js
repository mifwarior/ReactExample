import React from 'react'
import {connect} from 'react-redux'
import Profile from './../components/pages/Profile'
import {getProfileAction} from '../actions'


const ProfileContainer = (props)=>{
  const {id, userId} = props;
  if(!~userId) {
    props.getProfile(id);
  }

  return (<Profile {...props} />)
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...state.Profile,
    id:state.Login.id
  };
}
const dispatchStateToProps = (dispatch, ownProps)=>{
  return {
    getProfile:(id)=>{dispatch(getProfileAction(id))}
  }
}




export default connect(mapStateToProps, dispatchStateToProps)(ProfileContainer);

