import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>{this.props.example}</div>
    )
  }
}
function mapStateToProps(state){
  return {
    example: state.example
  }
}
export default connect(mapStateToProps)(App);