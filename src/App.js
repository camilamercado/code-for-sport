import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from './actions/appActions';
import {Link} from 'react-router'

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
          <h3>React / Redux / React-Router / Heroku</h3>
          <h3>cloned from @mars</h3> 
          <a href="https://github.com/mars/create-react-app-buildpack#usage">
          create-react-app-buildpack</a>
          <div className="link"><Link to={'/sub'}>LINK TO SUB_PAGE</Link></div>
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
