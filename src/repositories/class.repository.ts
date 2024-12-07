import { Repository } from "typeorm";
import { Class } from "../models/Class";

export class ClassRepository extends Repository<Class> {
    async findByName(name: string): Promise<Class[]> {
        return this.find({ where: { name } });
    }
}