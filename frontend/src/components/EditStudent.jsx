import React, { useEffect, useState } from "react";
import { getStudents, updateStudent } from "../services/studentService";
import { useParams, useNavigate } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    const res = await getStudents();
    const student = res.data.data.find((s) => s._id === id);
    if (student) {
      setFormData(student);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(id, formData);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Student</h2>
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;

