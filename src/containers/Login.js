import {connect} from 'react-redux'
import Login from './../components/pages/Login'
import {loginAction} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return state.Login;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (login, password) =>{
      dispatch(loginAction(login, password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

