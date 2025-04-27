import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <Link to="/add">Add Student</Link>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>StudentId</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>EnrollmentYear</th>
            <th>IsActive</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu._id}>
              <td>{stu.studentId}</td>
              <td>{stu.firstName}</td>
              <td>{stu.lastName}</td>
              <td>{stu.email}</td>
              <td>{stu.dob}</td>
              <td>{stu.department}</td>
              <td>{stu.enrollmentYear}</td>
              <td>{stu.isActive ? "Yes" : "No"}</td>
              <td>
                <Link to={`/edit/${stu._id}`}>Edit</Link> |{" "}
                <button onClick={() => handleDelete(stu._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
