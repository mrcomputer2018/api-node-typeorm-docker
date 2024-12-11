import { Router } from 'express';
import { getRepository } from 'typeorm';
import { AppDataSource } from '../database/data-source';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (req, res) => {
  try {
    const repo = AppDataSource.getRepository(Student);
    const res = await repo.save(req.body);
    return res.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return res.status(400).send();
  }
});

studentRouter.get('/', async (req, res) => {
  res.json(await AppDataSource.getRepository(Student).find());
});

export default studentRouter;
