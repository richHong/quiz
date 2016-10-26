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
  constructor(props) {
    super(props);
    this.state={
      spinner: false,
    };
  }
  saveLocal(e) {
    e.preventDefault();
    this.props.quizzes.forEach(quiz =>{
      quiz.saved = true;
    });
    this.setState({spinner:true});
    saveQuizzes(this.props.quizzes)
    .then( () => {
        this.setState({spinner: false});
        alert('Quizzes saved to localStorage');
        if(window.location.hash === '#/'){
          window.location.reload();
        } else {
          hashHistory.push('/');
        }
    }) 
    .catch( () => {
        this.setState({spinner: false});
        alert('Error! Quizzes not saved');
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
        {this.state.spinner ? <img className='spinner'src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'/> : null}
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