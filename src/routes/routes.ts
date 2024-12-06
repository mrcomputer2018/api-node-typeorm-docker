import { Router } from 'express';
import ClassRouter from './class.routes';
import UserRouter from './user.routes';

const routes = Router();

routes.use('/class', ClassRouter);
routes.use('/user', UserRouter);

export default routes;
