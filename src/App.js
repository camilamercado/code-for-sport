import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from './actions/appActions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  PropTypes = {
    actions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  componentDidMount(){
    this.props.actions.initialize(true)
  }

  render() {

    console.log("PROPS>>>", this.props)

    return (
      <div className="App">
        <div className="App-header">
          <h2>Software Studios Boilerplate</h2>
          <h3>React / Redux / Heroku</h3>
          <h3>cloned from @mars</h3> 
          <a href="https://github.com/mars/create-react-app-buildpack#usage">
          create-react-app-buildpack</a>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    'app' : state.app
  }
}

const mapDispatchToProps = (dispatch) => {
 return { actions: bindActionCreators(appActions, dispatch)}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
