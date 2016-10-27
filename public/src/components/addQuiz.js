import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { hashHistory }   from 'react-router';
import { addQuiz }          from '../actions/actions';

class AddQuiz extends Component {
  handleSubmit (e, title) {
    e.preventDefault();
    let newQuiz = {
      title: title.value,
      questions:[],
      saved: false
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
          <input style={{width: '30vw'}} type='text' required placeholder='Enter Title of Quiz' ref={input => this.title = input}/>
          <br/><br/>
          <input type='submit' value='Add Quiz'/>
        </form>
      </div>
    );
  }
};
export default connect() (AddQuiz);