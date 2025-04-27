import axios from "axios";

const API = axios.create({
  baseURL: "https://student-management-system-1-j3sh.onrender.com/api/products",
});

// Get all students
export const getStudents = () => API.get("/");

// Add a new student
export const addStudent = (studentData) => API.post("/", studentData);

// Delete a student
export const deleteStudent = (id) => API.delete(`/${id}`);

// Update a student
export const updateStudent = (id, studentData) => API.put(`/${id}`, studentData);

export default {
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent
};
