import React, { useState } from "react";
import { addStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    department: "",
    enrollmentYear: "",
    isActive: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>{key}: </label>
            <input
              type={key === "isActive" ? "checkbox" : "text"}
              name={key}
              value={formData[key]}
              checked={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
