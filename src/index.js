import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from  './Components/App'
import reducer from './reducer';



const store = createStore(reducer);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }


ReactDOM.render (
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));





