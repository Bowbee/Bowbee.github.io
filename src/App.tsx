import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import MainContent from "./MainContent";

interface State{
    loading: boolean,
}

class App extends Component {

    state:State = {
        loading: true,
    }

    render() {
      return (

        <div className="App">
          <div className="container-fluid p-0 mt-5">
            <MainContent />
          </div>
        </div>
      );
    }
}

export default hot(module)(App);