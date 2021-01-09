import React, {Component} from 'react';
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Main from "./Components/Main/Main";
import {Provider} from "react-redux";
import {store} from './Redux/Store/Store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                  <Header/>
                  <Main/>
                </div>
            </Provider>
        );
    }
}

export default App;