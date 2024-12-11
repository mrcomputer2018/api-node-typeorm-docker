import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Content } from './Content';
import { Class } from './Class';

@Entity('lesson')
export class Lesson {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column('varchar', { length: 255, nullable: false })
    description: string;

    @ManyToOne(() => Class, lessons => Lesson)
    classe: Class;

    @OneToOne(() => Content,  lesson => Lesson)
    content: Content

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
