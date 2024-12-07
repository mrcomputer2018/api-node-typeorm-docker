import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableStudent1733567147320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "student",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "100",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "age",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "key",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("student");
    }

}
