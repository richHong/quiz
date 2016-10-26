import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

function saveQuizzes(quizzes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        // pretend the save failed
        return reject(new Error('Error: Quizzes randomly failed to save'));
      }
      // pretend the save succeeded
      window.localStorage.setItem('quizzes', JSON.stringify(quizzes));
      return resolve();
    }, Math.random() * 1000);
  });
}

class Nav extends Component {
  saveLocal(e) {
    e.preventDefault();
    this.props.quizzes.forEach(quiz =>{
      quiz.saved = true;
    });
    saveQuizzes(this.props.quizzes)
    .then((err) => {
      if (err){
        alert(err);
      } else {
        alert('Quizzes saved to localStorage');
      }
      hashHistory.push('/');
    });
  }
  render() {
    return (
      <div>
        <h3>The Quiz Game</h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/addQuiz'>Add Quiz</Link>
          </li>
          <li>
            <button onClick={e => this.saveLocal(e)}>Save All Quizzes</button>
          </li>
        </ul>
        <hr/>
      </div>
      );
  }
};
function mapStateToProps(state){
  return {
    quizzes: state
  }
}
export default connect (mapStateToProps)(Nav);