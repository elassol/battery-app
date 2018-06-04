import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import 'typeface-roboto';
=======
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';

>>>>>>> 71bea99c35620101c14ca1e205ebacf36898291c

import App from './components/App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const enhancers = [applyMiddleware()];
const enhancer = compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(
  reducer,
  enhancer
);

function listener() {
  console.log(store.getState(), 'store state');
}

store.subscribe(listener);

class Component extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
      )
  };
};

ReactDOM.render(<Component />, document.getElementById('app'));
registerServiceWorker();
