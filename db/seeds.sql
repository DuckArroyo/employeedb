INSERT INTO department (name)
VALUES
('Human Resources'),
('Accounting'),
('Laboratories'),
('Gymnasyum'),
('Student Union'),
('VP');


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Rafael','Arroyo', 1, 1),
('Robyn','Arroyo', 2, 1),
('Bob','Smith', 1, 2),
('Jane', 'Smith', 1, 1);

INSERT INTO role (title, department_id, salary)
VALUES
('Web dev', 1, 100000),
('HR Specialist 1', 1, 60000),
('VP', 2, 80000),
('Manager', 3, 50000);
