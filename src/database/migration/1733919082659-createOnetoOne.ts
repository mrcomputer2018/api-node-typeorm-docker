import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateOnetoOne1733919082659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "content", // Nome da tabela que receberá a chave estrangeira
            new TableForeignKey({
                columnNames: ["lesson_id"], // Nome da coluna que será a chave estrangeira
                referencedTableName: "lesson", // Nome da tabela referenciada
                referencedColumnNames: ["id"], // Coluna na tabela referenciada
                onDelete: "CASCADE", // O que acontece ao excluir o registro referenciado
                onUpdate: "CASCADE", // O que acontece ao atualizar o registro referenciado
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         // Removendo a chave estrangeira
         const table = await queryRunner.getTable("profiles");
         const foreignKey = table?.foreignKeys.find(
             (fk) => fk.columnNames.indexOf("user_id") !== -1
         );
         if (foreignKey) {
             await queryRunner.dropForeignKey("profiles", foreignKey);
         }
    }

}
