CREATE TABLE Student(
       student_id INT PRIMARY KEY AUTO_INCREMENT, 
       student_name VARCHAR(60), 
       student_age INT
);
INSERT INTO Student(
       student_name, 
       student_age) 
VALUES(
       "dummmy data student 1", 
        26
);
INSERT INTO Student(
       student_name, 
       student_age) 
VALUES(
       "dummy data student 2", 
        24
);
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;