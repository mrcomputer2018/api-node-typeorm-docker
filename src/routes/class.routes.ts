// Responsavel por todas as rotas da classe
import { Router } from 'express';

const classRouter = Router();

classRouter.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

classRouter.get('/:id', (req, res) => {
    res.json({ id: req.params.id });
});

classRouter.post('/', (req, res) => {
    res.json(req.body);
});

export default classRouter;