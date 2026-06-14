Student Management System

A full-stack Student Management System developed to efficiently manage student records through Create, Read, Update, and Delete (CRUD) operations. The application provides a simple and user-friendly interface for managing student information while ensuring reliable data storage and retrieval.

📌 Project Overview

The Student Management System is designed to streamline the process of maintaining student records. It allows administrators to add new students, view existing records, update student details, and delete records when necessary.

This project demonstrates the integration of frontend and backend technologies to build a database-driven management application.

🚀 Features
Add new student records
View all student details
Update existing student information
Delete student records
User-friendly interface
Database connectivity for persistent storage
Efficient CRUD operations
🛠️ Technologies Used
Frontend
HTML
CSS
JavaScript
Backend
Python
Database
MySQL
📂 Project Structure
Student-management-ibm/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── requirements.txt
│
└── README.md
Installation and Setup
1. Clone the Repository
git clone https://github.com/Poorni2k/Student-management-ibm.git
cd Student-management-ibm
2. Install Required Dependencies
pip install -r requirements.txt
3. Configure MySQL Database

Create a MySQL database:

CREATE DATABASE student_management;

Create the required table:

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    department VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20)
);

Update your MySQL credentials in the backend configuration file.

4. Run the Application
python app.py

Open your browser and access:

http://localhost:5000
📊 System Functionalities
Create

Add new student information to the database.

Read

Retrieve and display all student records.

Update

Modify existing student details.

Delete

Remove student records from the system.

🎯 Learning Outcomes
Full-stack web application development
Database integration using MySQL
CRUD operation implementation
Backend development with Python
Client-server communication
Data management and validation
📸 Screenshots

Add project screenshots here:

screenshots/
├── dashboard.png
├── add-student.png
└── student-list.png
🔮 Future Enhancements
Student login and authentication
Role-based access control
Search and filtering functionality
Attendance management
Report generation
Export data to Excel/PDF
Cloud deployment
