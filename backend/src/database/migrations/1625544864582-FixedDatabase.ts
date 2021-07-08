import {MigrationInterface, QueryRunner} from "typeorm";

export class FixedDatabase1625544864582 implements MigrationInterface {
    name = 'FixedDatabase1625544864582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" varchar PRIMARY KEY NOT NULL, "country" varchar NOT NULL, "state" varchar, "city" varchar, "street" varchar, "number" integer, "zipCode" varchar)`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" varchar PRIMARY KEY NOT NULL, "waterBillContract" varchar, "eletricBillContract" varchar, "propertyTaxNumber" varchar NOT NULL, "addressId" varchar, CONSTRAINT "REL_2b2211958ef1f0e3c680339100" UNIQUE ("addressId"))`);
        await queryRunner.query(`CREATE TABLE "tenants" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "email" varchar NOT NULL, "passwordHash" varchar NOT NULL, "name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "cpf" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "contracts" ("id" varchar PRIMARY KEY NOT NULL, "rent" float NOT NULL, "payday" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "ownerId" varchar, "tenantId" varchar, "propertyId" varchar, CONSTRAINT "REL_3d01d6444fe0d4a9e47ac9b362" UNIQUE ("propertyId"))`);
        await queryRunner.query(`CREATE TABLE "bills" ("id" varchar PRIMARY KEY NOT NULL, "expirationDate" datetime NOT NULL, "paymentDate" datetime NOT NULL, "contractId" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_properties" ("id" varchar PRIMARY KEY NOT NULL, "waterBillContract" varchar, "eletricBillContract" varchar, "propertyTaxNumber" varchar NOT NULL, "addressId" varchar, CONSTRAINT "REL_2b2211958ef1f0e3c680339100" UNIQUE ("addressId"), CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_properties"("id", "waterBillContract", "eletricBillContract", "propertyTaxNumber", "addressId") SELECT "id", "waterBillContract", "eletricBillContract", "propertyTaxNumber", "addressId" FROM "properties"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`ALTER TABLE "temporary_properties" RENAME TO "properties"`);
        await queryRunner.query(`CREATE TABLE "temporary_contracts" ("id" varchar PRIMARY KEY NOT NULL, "rent" float NOT NULL, "payday" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "ownerId" varchar, "tenantId" varchar, "propertyId" varchar, CONSTRAINT "REL_3d01d6444fe0d4a9e47ac9b362" UNIQUE ("propertyId"), CONSTRAINT "FK_83da1c4b4e98a1254703438aa9c" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_4317b3172f8e20198732e698e12" FOREIGN KEY ("tenantId") REFERENCES "tenants" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3d01d6444fe0d4a9e47ac9b3625" FOREIGN KEY ("propertyId") REFERENCES "properties" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contracts"("id", "rent", "payday", "createdAt", "ownerId", "tenantId", "propertyId") SELECT "id", "rent", "payday", "createdAt", "ownerId", "tenantId", "propertyId" FROM "contracts"`);
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
        await queryRunner.query(`CREATE TABLE "contracts" ("id" varchar PRIMARY KEY NOT NULL, "rent" float NOT NULL, "payday" integer NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "ownerId" varchar, "tenantId" varchar, "propertyId" varchar, CONSTRAINT "REL_3d01d6444fe0d4a9e47ac9b362" UNIQUE ("propertyId"))`);
        await queryRunner.query(`INSERT INTO "contracts"("id", "rent", "payday", "createdAt", "ownerId", "tenantId", "propertyId") SELECT "id", "rent", "payday", "createdAt", "ownerId", "tenantId", "propertyId" FROM "temporary_contracts"`);
        await queryRunner.query(`DROP TABLE "temporary_contracts"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME TO "temporary_properties"`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" varchar PRIMARY KEY NOT NULL, "waterBillContract" varchar, "eletricBillContract" varchar, "propertyTaxNumber" varchar NOT NULL, "addressId" varchar, CONSTRAINT "REL_2b2211958ef1f0e3c680339100" UNIQUE ("addressId"))`);
        await queryRunner.query(`INSERT INTO "properties"("id", "waterBillContract", "eletricBillContract", "propertyTaxNumber", "addressId") SELECT "id", "waterBillContract", "eletricBillContract", "propertyTaxNumber", "addressId" FROM "temporary_properties"`);
        await queryRunner.query(`DROP TABLE "temporary_properties"`);
        await queryRunner.query(`DROP TABLE "bills"`);
        await queryRunner.query(`DROP TABLE "contracts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "tenants"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
