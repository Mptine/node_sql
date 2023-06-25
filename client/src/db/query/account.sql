INSERT INTO equipments (
    id,
    owner_id,
    equipment_class,
    load_capacity,
    division,
    sector,
)

INSERT INTO class (powered_by, transmited_by, is_mobile, load_unit)
VALUES ('Electric', 'Wireless', true, 'Kg');

INSERT INTO certificate (equipment_id, inspector, project_id)
VALUES ('123', '456', '789');

INSERT INTO projects (started_at, finished_at, client_id)
VALUES ('2023-06-01 10:00:00', '2023-06-05 16:00:00', 123);

INSERT INTO users (type, email, phone, work_at, department, sector)
VALUES ('Employee', 'employee@example.com', '123-456-7890', 123, 'HR', 'Sector A');

INSERT INTO companies (company, branch)
VALUES ('Example Company', 'Branch XYZ');
