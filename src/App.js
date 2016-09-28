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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
