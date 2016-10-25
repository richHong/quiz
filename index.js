import React, { Component } from 'react';
import { render }           from 'react-dom';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';

import exampleReducer from './public/src/reducers/root'

import App from './public/src/components/App';

let store = createStore(exampleReducer);

render(<Provider store={store}>
         <App />
       </Provider>, document.getElementById('app'))
