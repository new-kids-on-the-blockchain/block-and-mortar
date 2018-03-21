import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store'
import history from './history'
import { Router } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App />
     </Router>
  </Provider>,
  document.getElementById('root')
);
