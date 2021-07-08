export function login(jwt: string) {
	window.localStorage.setItem('jwt', jwt);
	window.location.replace('/');
}
