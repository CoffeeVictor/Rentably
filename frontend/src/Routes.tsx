import React from 'react';
import { Route } from 'react-router-dom';
import AddRents from './views/AddRents';
import EditRents from './views/EditRents';
import Graphics from './views/Graphics';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ViewRents from './views/ViewRents';

const Routes: React.FC = () => {
	return (
		<>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/add">
				<AddRents />
			</Route>
			<Route exact path="/view">
				<ViewRents />
			</Route>
			<Route exact path="/edit">
				<EditRents />
			</Route>
			<Route exact path="/graphs">
				<Graphics />
			</Route>
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/register">
				<Register />
			</Route>
		</>
	);
};

export default Routes;
