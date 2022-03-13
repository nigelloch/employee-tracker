

INSERT INTO departments (name)
VALUES
  ('service'),
  ('sales'),
  ('marketing'),
  ('IT'),
  ('Executive');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Service Manager', 180000, 1),
  ('Service Rep', 50000, 1),
  ('Sales Representative', 150000, 2),
  ('Sales Manager', 180000, 2),
  ('Marketing Analyst', 100000, 3),
  ('Marketing Manager', 180000, 3),
  ('IT Manager', 200000, 4), 
  ('Developer', 110000, 4), 
  ('Engineer', 150000, 4),
  ('President', 500000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 1, NULL),
  ('Janice', 'Soprano', 2, NULL),
  ('Peter', 'Greenway', 4, NULL),
  ('Bruce', 'Wayne', 5, NULL),
  ('Frank', 'Castle', 4, NULL),
  ('Selena', 'Kyle', 3, NULL),
  ('Diana', 'Prince', 2, NULL),
  ('Miles', 'Morales', 2, NULL);