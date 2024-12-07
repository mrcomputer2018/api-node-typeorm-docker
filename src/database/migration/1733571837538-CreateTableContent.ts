import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreateTableContent1733571837538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "content",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: false,
                    length: "255"
                },
                {
                    name: "linkContent",
                    type: "varchar",
                    isNullable: false,
                    length: "100"
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("content")
    }


}
