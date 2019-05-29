import React, { Component } from 'react'
import { createStore } from '../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';

export default class Root extends React.Component{
    renderApp(){
       const initialState = window.__INITIAL_STATE__;
       const store = createStore(initialState);
    }

    render(){
        return this.renderApp();
    }
}