import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Lesson } from './Lesson';

@Entity('class')
export class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 100, unique: true, nullable: false })
    name: string;

    @Column('integer', { nullable: false })
    duration: number;

    @OneToMany(() => Lesson, classe => Class)
    lessons: Lesson[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
