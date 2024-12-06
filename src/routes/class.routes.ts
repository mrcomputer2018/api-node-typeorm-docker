// Responsavel por todas as rotas da classe
import app from '../app';
import { AppDataSource } from './../database/data-source';
import { Router } from 'express';

const classRouter = Router();

classRouter.get('/', async(req, res) => {
    try {
        const response = await AppDataSource.getRepository('Class').find();
        res.status(200).json(response);
    }
    catch (error) {
        console.log('Erro ao buscar as classes: ', error.message);
        res.status(500).json({ message: 'Erro ao buscar as classes' });
    }
});

classRouter.get('/:id', (req, res) => {
    res.json({ id: req.params.id });
});

classRouter.post('/', async (req, res) => {
    try {
        const classes = await AppDataSource.getRepository('Class').save(req.body);
        res.json(classes);
    } catch (error) {
        console.log('Erro ao salvar a classe: ', error.message);
        res.status(500).json({ message: 'Erro ao salvar a classe' });
    }
});

export default classRouter;
