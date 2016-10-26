import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import { browserHistory }   from 'react-router';
import { saveQuizList }      from '../actions/actions';

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
      this.props.dispatch(saveQuizList(this.props.quizzes))
      .then(() => {
        this.setState({spinner:false});
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