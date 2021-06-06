import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTenant1622942515745 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tenants',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'email',
						type: 'string',
						isNullable: false,
					},
					{
						name: 'name',
						type: 'string',
						isNullable: false,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tenants');
	}
}
