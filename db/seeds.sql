INSERT INTO departments (name)
VALUES
  ('service')

INSERT INTO roles (title, salary, department_id)
VALUES
  ('manager', 180000.00, 1),
  ('analyst', 110000.00, 2), 
  ('customer_service', 50000.00, 3);

INSERT INTO employees (first_name, last_name)
VALUES
  ('james', 'fraser'),
  ('jack', 'london'),
  ('robert', 'bruce'),
  ('peter', 'greenaway');