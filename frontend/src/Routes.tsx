import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Validate1 from './views/Validate1';
import Validate2 from './views/Validate2';
import RedefinePassword1 from './views/RedefinePassword1';
import RedefinePassword2 from './views/RedefinePassword2';

const Routes: React.FC = () => {
	return (
		<>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/register">
				<Register />
			</Route>
			<Route path="/validate">
				<Validate1 />
			</Route>
			<Route path="/validate2">
				<Validate2 />
			</Route>
			<Route path="/forgot">
				<RedefinePassword1 />
			</Route>
			<Route path="/forgot2">
				<RedefinePassword2 />
			</Route>
		</>
	);
};

export default Routes;
