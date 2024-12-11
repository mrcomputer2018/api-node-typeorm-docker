import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Lesson } from './Lesson';

@Entity('content')
export class Content {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, nullable: false })
    description: string;

    @Column('varchar', { length: 100, nullable: false })
    linkContent: string;

    @OneToOne(() => Lesson, content => Content)
    @JoinColumn()
    lesson: Lesson;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
