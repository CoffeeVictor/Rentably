import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

//inquilino, aluguel, imovel, contrato
