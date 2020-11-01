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

    componentDidMount = function() {
        console.log("Mounted App");
    };

    componentDidUpdate(prevState: State) {

    }

    render() {
      return (

        <div className="App">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
          

          <div className="jumbotron m-0 p-0 d-flex align-items-center min-vh-100">
            <div className="container p-0">
              <MainContent />
            </div>
          </div>

        </div>
      );
    }
}

export default hot(module)(App);