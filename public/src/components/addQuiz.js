import React, { Component } from 'react';
import { addQuiz } from '../actions/actions';
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

class AddQuiz extends Component {
  handleSubmit (e, title) {
    e.preventDefault();
    let newQuiz = {
      title: title.value,
      questions:[]
    };
    this.props.dispatch(addQuiz(newQuiz));
    hashHistory.push('/');
  }
  render(){
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e, this.title)}>
          <label>Quiz Title:</label>
          <br/>
          <input type='text' placeholder='Enter Title of Quiz' ref={input => this.title = input}/>
          <br/>
          <input type='submit'/>
        </form>
      </div>
      );
  }
};
export default connect() (AddQuiz);