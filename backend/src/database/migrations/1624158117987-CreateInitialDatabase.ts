import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateInitialDatabase1624158117987 implements MigrationInterface {
    name = 'CreateInitialDatabase1624158117987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" varchar PRIMARY KEY NOT NULL, "country" varchar NOT NULL, "state" varchar, "city" varchar, "street" varchar, "number" integer, "zipCode" varchar)`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" varchar PRIMARY KEY NOT NULL, "waterBillContract" varchar, "eletricBillContract" varchar, "propertyTaxNumber" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "tenants" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "passwordHash" varchar NOT NULL, "name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "cpf" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "contracts" ("id" varchar PRIMARY KEY NOT NULL, "rent" float NOT NULL, "payday" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "ownerId" varchar, "tenantId" varchar)`);
        await queryRunner.query(`CREATE TABLE "bills" ("id" varchar PRIMARY KEY NOT NULL, "expirationDate" datetime NOT NULL, "paymentDate" datetime NOT NULL, "contractId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_contracts" ("id" varchar PRIMARY KEY NOT NULL, "rent" float NOT NULL, "payday" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "ownerId" varchar, "tenantId" varchar, CONSTRAINT "FK_83da1c4b4e98a1254703438aa9c" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_4317b3172f8e20198732e698e12" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contracts"("id", "rent", "payday", "createdAt", "ownerId", "tenantId") SELECT "id", "rent", "payday", "createdAt", "ownerId", "tenantId" FROM "contracts"`);
        await queryRunner.query(`DROP TABLE "contracts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contracts" RENAME TO "contracts"`);
        await queryRunner.query(`CREATE TABLE "temporary_bills" ("id" varchar PRIMARY KEY NOT NULL, "expirationDate" datetime NOT NULL, "paymentDate" datetime NOT NULL, "contractId" varchar, CONSTRAINT "FK_2ba6e24fc0036e77c1f459a859d" FOREIGN KEY ("contractId") REFERENCES "contracts" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_bills"("id", "expirationDate", "paymentDate", "contractId") SELECT "id", "expirationDate", "paymentDate", "contractId" FROM "bills"`);
        await queryRunner.query(`DROP TABLE "bills"`);
        await queryRunner.query(`ALTER TABLE "temporary_bills" RENAME TO "bills"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bills" RENAME TO "temporary_bills"`);
        await queryRunner.query(`CREATE TABLE "bills" ("id" varchar PRIMARY KEY NOT NULL, "expirationDate" datetime NOT NULL, "paymentDate" datetime NOT NULL, "contractId" varchar)`);
        await queryRunner.query(`INSERT INTO "bills"("id", "expirationDate", "paymentDate", "contractId") SELECT "id", "expirationDate", "paymentDate", "contractId" FROM "temporary_bills"`);
        await queryRunner.query(`DROP TABLE "temporary_bills"`);
        await queryRunner.query(`ALTER TABLE "contracts" RENAME TO "temporary_contracts"`);
        await queryRunner.query(`CREATE TABLE "contracts" ("id" varchar PRIMARY KEY NOT NULL, "rent" float NOT NULL, "payday" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "ownerId" varchar, "tenantId" varchar)`);
        await queryRunner.query(`INSERT INTO "contracts"("id", "rent", "payday", "createdAt", "ownerId", "tenantId") SELECT "id", "rent", "payday", "createdAt", "ownerId", "tenantId" FROM "temporary_contracts"`);
        await queryRunner.query(`DROP TABLE "temporary_contracts"`);
        await queryRunner.query(`DROP TABLE "bills"`);
        await queryRunner.query(`DROP TABLE "contracts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "tenants"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
