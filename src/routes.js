import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import SubPage from './components/SubPage';

const Routes = (props) => (
<Router history={browserHistory}>
	<Route path="/" component={App}/>
	<Route path="/sub" component={SubPage}/>
</Router>
);

export default Routes
