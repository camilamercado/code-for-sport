import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from './actions/appActions';
import {Link} from 'react-router'
import data from './database/sporting-heroes.js'
import Scroller from './components/Scroller'
import Example from './components/Example'

import './App.css';

class App extends Component {

  PropTypes = {
    actions: PropTypes.object.isRequired,
    app: PropTypes.object.isRequired
  }

  componentDidMount(){
    this.props.actions.initialize(true)
    //this.props.actions.setGSheetData()
    this.loadInitialPosts()
  }

  loadInitialPosts () {
    this.props.actions.postData(data.dataObj)
  }

  startRequest(){
    if (this.props.route.path === "/Example") {
      <Example 
          app={this.props.app}
          actions={this.props.actions}
          history={this.props.history}
          routeParams={this.props.routeParams}
          />

    }

  }

 

  render() {

    console.log("PROPS>>>", this.props.route.path)

    return (
      <div className="App">
      {this.startRequest()}
        <Scroller 
          app={this.props.app}
          actions={this.props.actions}
          history={this.props.history}
          routeParams={this.props.routeParams}
          />
      }
        
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
