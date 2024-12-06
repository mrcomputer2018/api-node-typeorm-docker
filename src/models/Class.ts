import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('class')
export class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 100, unique: true, nullable: false })
    name: string;

    @Column('integer', { nullable: false })
    duration: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
