import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import Scroller from './components/Scroller';

const Routes = (props) => (
<Router history={browserHistory}>
	<Route path="/" component={App}/>
	 <Route path="/:currentpost" component={App}/>
	 <Route path="/:currentpost/:pagenumber" component={App}/>
	
	<Route path="/scroller" component={Scroller}/>
</Router>
);

export default Routes
