INSERT INTO department (name)
VALUES ('IT'), ('Accounting'), ('Engineering');


INSERT INTO role_1 (title,salary,department_id)
VALUES ('Manager',50,1),('Intern',40,2),('Design',30,3);

INSERT INTO Employee (first_name,last_name,role_id,manager_id)
VALUES ('Jack', 'Rock',1,null), ('Carlos','Rock',2,1),('Zeke','Rock',3,1);
