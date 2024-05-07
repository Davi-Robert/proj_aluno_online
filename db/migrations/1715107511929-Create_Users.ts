import {MigrationInterface, QueryRunner, Table} from "typeorm";

const TABLE_NAME = "users"

export class CreateUsers1715107511929 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: TABLE_NAME,
                columns:[
                    {
                        name: "id",
                        type: "uid",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
