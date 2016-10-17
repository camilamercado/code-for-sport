import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';

const Routes = (props) => (
<Router history={browserHistory}>
	<Route path="/" component={App}/>
	 <Route path="/:currentpost" component={App}/>
	 <Route path="/:currentpost/:pagenumber" component={App}/>
</Router>
);

export default Routes
