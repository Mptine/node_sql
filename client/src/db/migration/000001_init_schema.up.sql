CREATE TABLE "equipments" (
  "id" bigserial PRIMARY KEY,
  "owner_id" int,
  "equipment_class" integer NOT NULL,
  "load_capacity" integer,
  "division" varchar,
  "sector" varchar
);

CREATE TABLE "class" (
  "id" serial PRIMARY KEY,
  "powered_by" varchar,
  "transmited_by" varchar,
  "is_mobile" boolean,
  "load_unit" varchar DEFAULT 'Kg'
);

CREATE TABLE "certificate" (
  "id" bigserial PRIMARY KEY,
  "created_at" timestamptz DEFAULT (now()),
  "equipment_id" bigint NOT NULL,
  "inspector" int,
  "project_id" int
);

CREATE TABLE "projects" (
  "id" serial PRIMARY KEY,
  "started_at" timestamptz DEFAULT (now()),
  "finished_at" timestamptz DEFAULT (now()),
  "client_id" int
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "user_type" varchar,
  "email" varchar,
  "phone" varchar,
  "work_at" integer,
  "department" varchar,
  "sector" varchar
);

CREATE TABLE "companies" (
  "id" serial PRIMARY KEY,
  "company" varchar,
  "branch" varchar
);

ALTER TABLE "equipments" ADD FOREIGN KEY ("owner_id") REFERENCES "users" ("id");

ALTER TABLE "equipments" ADD FOREIGN KEY ("equipment_class") REFERENCES "class" ("id");

ALTER TABLE "certificate" ADD FOREIGN KEY ("equipment_id") REFERENCES "equipments" ("id");

ALTER TABLE "certificate" ADD FOREIGN KEY ("inspector") REFERENCES "users" ("id");

ALTER TABLE "certificate" ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("id");

ALTER TABLE "projects" ADD FOREIGN KEY ("client_id") REFERENCES "users" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("work_at") REFERENCES "companies" ("id");