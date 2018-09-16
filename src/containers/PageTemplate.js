import {connect} from 'react-redux'
import PageTemplate from './../components/PageTemplate'
  
const mapStateToProps = (state, ownProps) => {
  return state;
}

export default connect(mapStateToProps, null)(PageTemplate);

