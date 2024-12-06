// Responsavel por todas as rotas da classe
import { AppDataSource } from './../database/data-source';
import { Router } from 'express';

const classRouter = Router();

classRouter.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

classRouter.get('/:id', (req, res) => {
    res.json({ id: req.params.id });
});

classRouter.post('/', async (req, res) => {
    try {
        const classes = await AppDataSource.getRepository('Class').save(req.body);
        res.json(classes);
    } catch (error) {
        console.log('Erro ao salvar a classe: ', error);
        res.status(500).json({ message: 'Erro ao salvar a classe' });
    }
});

export default classRouter;
