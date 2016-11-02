import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import * as actionCreators    from '../actions/actionCreators'
import Main from './Main'


//function mapStateToProps (state) {
  //return {
    //posts: state.posts,
    //comments: state.comments
  //}
//}

/* Refactor to ES6 fat arrow function */
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

//function mapDispatchToProps (dispatch) {
  //return bindActionCreators(actionCreators, dispatch)
//}

/* Refactor to ES6 fat arrow function */
const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators(actionCreators, dispatch)
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App

