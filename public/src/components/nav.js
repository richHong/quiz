import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import { loadDemo, requestSave }      from '../actions/actions';

class Nav extends Component {
  saveLocal() {
    this.props.dispatch(requestSave(this.props.quizzes));
  }
  deleteLocal() {
    const answer = confirm('Are you sure you want to delete localStorage?');
    if (answer) window.localStorage.removeItem('quizzes');
    window.location.reload();
  }
  loadDemo () {
    this.props.dispatch(loadDemo());
  }
  render() {
    const demo = this.props.quizzes.filter(quiz => quiz.title === 'Presidents of the USA' || quiz.title === 'US Capitols');
    return (
      <div className='nav-container'>
        <h1>The Quiz Game</h1>
        <ul className='nav'>
          <li>
            <Link to='/'><i className="fa fa-home fa-3x tooltip" aria-hidden="true"><span className="tooltiptext">Home</span></i></Link>
          </li>
          <li>
            <Link to='/addQuiz'><i className="fa fa-plus fa-3x tooltip" aria-hidden="true"><span className="tooltiptext">Add Quiz</span></i></Link>
          </li>
          <li>
            <div onClick={e => this.saveLocal()}><i className="fa fa-floppy-o fa-3x tooltip" aria-hidden="true"><span className="tooltiptext">Save Quizzes</span></i></div>
          </li>
          <li>
            <div onClick={e => this.deleteLocal()}><i className="fa fa-trash fa-3x tooltip" aria-hidden="true"><span className="tooltiptext">Delete Storage</span></i></div>
          </li>
          { demo.length > 0 ? null :
            <li>
              <div onClick={e => this.loadDemo()}><i className="fa fa-smile-o fa-3x tooltip" aria-hidden="true"><span className="tooltiptext">Load Demo</span></i></div>
            </li> }
        {this.props.spinner ? <li><img className='spinner'src='https://shortpixel.com/img/spinner2.gif'/></li> : null}
        </ul>
        <hr/>
      </div>
    );
  }
};
function mapStateToProps(state){
  return {
    quizzes: state.quizzes,
    spinner: state.spinner
  }
}
export default connect (mapStateToProps)(Nav);