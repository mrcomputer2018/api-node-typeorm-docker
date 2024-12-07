import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

export default app;

function localCors(): any {
    throw new Error('Função não implementada.');
}
