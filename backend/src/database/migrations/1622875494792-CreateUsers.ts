import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1622875494792 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'email',
						type: 'varchar',
						isUnique: true,
						isNullable: false,
					},
					{
						name: 'password_hash',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users');
	}
}
