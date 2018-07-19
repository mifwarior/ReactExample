import React from 'react'
import {connect} from 'react-redux'
import News from './../components/pages/News'
import {getNewsAction} from '../actions'


class NewsContainer extends React.Component {
  componentDidMount(){
    this.props.getNews();
  }
  render(){
    return (<News {...this.props} />)
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    news:state.News.data
  };
}
const dispatchStateToProps = (dispatch, ownProps)=>{
  return {
    getNews:()=>{dispatch(getNewsAction())}
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(NewsContainer);

