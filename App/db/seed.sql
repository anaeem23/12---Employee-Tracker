INSERT INTO department (name)
VALUES ('IT'), ('Accounting'), ('Engineering');


INSERT INTO role_1 (title,salary,department_id)
VALUES ('Manager',50,1),('Intern',10,2),('Design',30,3);

INSERT INTO Employee (first_name,last_name,role_id,manager_id)
VALUES ('LeBron', 'James',1,null), ('Carlos','Boozer',2,1),('Kyrie','Irving',3,1);
