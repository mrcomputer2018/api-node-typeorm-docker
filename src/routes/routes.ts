import { Router } from "express";
import ClassRouter from "./class.routes";

const routes = Router();

routes.use('/class', ClassRouter);

export default routes;