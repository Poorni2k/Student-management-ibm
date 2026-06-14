# 🎓 Student Management System

A database-driven Student Management System developed using **Python** and **MySQL** to simplify the management of student records. The system provides efficient CRUD (Create, Read, Update, Delete) operations, allowing users to manage student information through a user-friendly interface.

---

## 📖 About The Project

Managing student records manually can be time-consuming and prone to errors. This project automates the process by providing a centralized platform for storing, updating, retrieving, and deleting student information.

The application demonstrates the practical implementation of Python programming, database connectivity, and CRUD operations using MySQL.

---

## ✨ Features

- ➕ Add new student records
- 📋 View student details
- ✏️ Update existing student information
- 🗑️ Delete student records
- 💾 MySQL database integration
- 🔍 Efficient data retrieval
- 📊 Organized record management
- 🎯 User-friendly interface

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Python | Backend Development |
| MySQL | Database Management |
| HTML | Structure |
| CSS | Styling |
| JavaScript | Frontend Functionality |

---

## 🏗️ System Architecture

```text
User Interface
       │
       ▼
Python Application
       │
       ▼
MySQL Database
```

---

## 📂 Project Structure

```text
Student-management-ibm/
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   ├── index.html
│   ├── add_student.html
│   ├── update_student.html
│   └── view_students.html
│
├── database/
│   └── student_management.sql
│
├── app.py
├── requirements.txt
├── README.md
└── .gitignore
```

> Note: Folder structure may vary slightly based on project updates.

---

## 🚀 Getting Started

### Prerequisites

Before running the project, ensure that the following software is installed:

- Python 3.x
- MySQL Server
- MySQL Workbench (Optional)
- Git

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Poorni2k/Student-management-ibm.git
```

### 2. Navigate to the Project Directory

```bash
cd Student-management-ibm
```

### 3. Install Required Dependencies

```bash
pip install -r requirements.txt
```

### 4. Create MySQL Database

```sql
CREATE DATABASE student_management;
```

### 5. Configure Database Credentials

Update your MySQL credentials in the Python configuration file:

```python
host = "localhost"
user = "root"
password = "your_password"
database = "student_management"
```

### 6. Run the Application

```bash
python app.py
```

---

## 📊 CRUD Functionalities

### Create
Add new student records into the database.

### Read
View and retrieve student information.

### Update
Modify existing student details.

### Delete
Remove student records from the database.

---

## 🎯 Project Objectives

- Automate student record management
- Reduce manual paperwork
- Improve data accuracy and accessibility
- Demonstrate Python-MySQL integration
- Implement real-world CRUD operations

---

## 📈 Future Enhancements

- User Authentication & Authorization
- Student Attendance Management
- Search and Filter Features
- Report Generation
- Export Records to Excel/PDF
- Cloud Deployment
- Dashboard Analytics
- Role-Based Access Control

---

## 💡 Learning Outcomes

This project helped in understanding:

- Python Programming
- MySQL Database Operations
- CRUD Functionality
- Database Connectivity
- Data Management Techniques
- Software Development Workflow

---

## 📸 Screenshots

Add screenshots of your application here.

```markdown
![Dashboard](screenshots/dashboard.png)

![Add Student](screenshots/add-student.png)

![Student Records](screenshots/student-records.png)
```

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is developed for educational and learning purposes.
