import React, { Component } from 'react';
import thunk                from 'redux-thunk';
import { render }           from 'react-dom';
import { Provider }         from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory} from 'react-router';

import rootReducer from './public/src/reducers/root';
import {saveSaga, conSaga} from './public/src/sagas/sagas';

import App  from './public/src/components/app';
import Nav  from './public/src/components/nav';
import Home from './public/src/components/home';
import Quiz from './public/src/components/quiz';
import AddQuiz      from './public/src/components/addQuiz';
import AddQuestion  from './public/src/components/addQuestion';
import EditQuestion from './public/src/components/editQuestion';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saveSaga);
sagaMiddleware.run(conSaga);

render(<Provider store={ store }>
        <Router history={ hashHistory }>
          <Route component={ App }>
            <Route path='/' component={ Home } />
            <Route path='/addQuiz' component={ AddQuiz } />
            <Route path='/addQuestion/:quizTitle' component={ AddQuestion }/>
            <Route path='/editQuestion/:quizTitle' component={ EditQuestion }/>
            <Route path='/quiz/:quizTitle' component={ Quiz } />
          </Route>
        </Router> 
       </Provider>, document.getElementById('app'))
