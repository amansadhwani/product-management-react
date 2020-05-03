import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import {saveState} from './localstorage'

const store=createStore(rootReducer, composeWithDevTools())

store.subscribe(()=>{
    saveState(store.getState())
    //patientData: store.getState()
})

ReactDOM.render(
    <Provider store={store}>
<App /> </Provider>, document.getElementById('root'));