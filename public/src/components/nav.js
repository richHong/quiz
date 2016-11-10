import React, { Component } from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';

class Nav extends Component {
  saveLocal(e) {
    e.preventDefault();
    this.props.dispatch({type: 'SAVE_REQUESTED', quizzes: this.props.quizzes});
  
  }
  render() {
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
            <div onClick={e => this.saveLocal(e)}><i className="fa fa-floppy-o fa-3x tooltip" aria-hidden="true"><span className="tooltiptext">Save Quizzes</span></i></div>
          </li>
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