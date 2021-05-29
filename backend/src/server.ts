import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (request, response) => {
	return response.json({
		message: 'Hello World from SERVER!',
	});
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
