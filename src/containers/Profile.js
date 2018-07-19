import React from 'react'
import {connect} from 'react-redux'
import Profile from './../components/pages/Profile'
import {getProfileAction} from '../actions'


class ProfileContainer extends React.Component {
  componentDidMount(){
    const {id, userId} = this.props;
    if(id !== userId )this.props.getProfile(id);
  }
  render(){
    return (<Profile {...this.props} />)
  }
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

