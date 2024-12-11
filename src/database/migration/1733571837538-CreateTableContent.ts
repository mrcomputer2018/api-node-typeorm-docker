import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableContent1733571837538 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'content',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false,
                        length: '255',
                    },
                    {
                        name: 'linkContent',
                        type: 'varchar',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'lesson_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKLesson',
                        referencedTableName: 'lesson',
                        referencedColumnNames: ['id'],
                        columnNames: ['lesson_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('content');
    }
}
