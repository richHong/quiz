import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import { browserHistory }   from 'react-router';
import { getQuizList }      from '../actions/actions';

function saveQuizzes(quizzes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        return reject(new Error('Error: Quizzes failed to save.'));
      }
      quizzes.forEach(quiz =>{
        quiz.saved = true;
      });
      window.localStorage.setItem('quizzes', JSON.stringify(quizzes));
      return resolve();
    }, Math.random() * 1000);
  });
}

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state={
      spinner: false,
    };
  }
  saveLocal(e) {
    e.preventDefault();
    this.setState({spinner:true}, () => {
      saveQuizzes(this.props.quizzes)
      .then( () => {
          this.setState({spinner: false});
          this.props.dispatch(getQuizList());
          browserHistory.push('/');
      }) 
      .catch( () => {
          this.setState({spinner: false});
          alert('Error: Quizzes NOT Saved! Please try saving again.');
      });
    });
  }
  render() {
    return (
      <div>
        <h1>The Quiz Game</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/addQuiz'>Add Quiz</Link>
          </li>
        </ul>
            <button onClick={e => this.saveLocal(e)}>Save All Quizzes</button>
        {this.state.spinner ? <img className='spinner'src='https://shortpixel.com/img/spinner2.gif'/> : null}
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