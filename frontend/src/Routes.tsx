import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Validate1 from './views/Validate1';
import Validate2 from './views/Validate2';
import RedefinePassword1 from './views/RedefinePassword1';
import RedefinePassword2 from './views/RedefinePassword2';
import AddRents from './views/AddRents';
import ViewRents from './views/ViewRents';
import EditRents from './views/EditRents';
import Graphics from './views/Graphics';

const Routes: React.FC = () => {
	return (
		<>
			<Route exact path="/home">
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
			<Route path="/validate">
				<Validate1 />
			</Route>
			<Route path="/validate2">
				<Validate2 />
			</Route>
		</>
	);
};

export default Routes;
