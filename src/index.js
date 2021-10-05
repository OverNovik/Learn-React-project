import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer)

const application = (
  <Provider store={store}>
    <BrowserRouter>
      <App title={'I am from props!'}/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();
