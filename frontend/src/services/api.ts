import axios from 'axios';
import config from '../config';

axios.defaults.withCredentials = true;

const api = axios.create({
	baseURL: config.apiURL,
});

export default api;
