import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('lesson')
export class Lesson {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 100 })
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}