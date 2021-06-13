import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

const Routes: React.FC = () => {
	return (
		<>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
		</>
	);
};

export default Routes;
