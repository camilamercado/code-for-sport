import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import Example from './components/Example';

const Routes = (props) => (
<Router history={browserHistory}>
	<Route path="/App" component={App}/>
	 <Route path="/App/:currentpost" component={App}/>
	 <Route path="/App/:currentpost/:pagenumber" component={App}/>
	 <Route path="/Example" component={Example}/>

</Router>
);

export default Routes
