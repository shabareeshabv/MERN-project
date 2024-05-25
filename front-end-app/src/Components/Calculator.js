// src/Components/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [student, setStudent] = useState({ name: '', usn: '' });
  const [semesters, setSemesters] = useState([{ sgpa: '' }]);
  const [cgpa, setCgpa] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleStudentChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleInputChange = (index, event) => {
    const values = [...semesters];
    values[index][event.target.name] = event.target.value;
    setSemesters(values);
  };

  const handleAddSemester = () => {
    setSemesters([...semesters, { sgpa: '' }]);
  };

  const calculateCGPA = () => {
    let totalSGPA = 0;
    let count = 0;
    semesters.forEach(sem => {
      const sgpa = parseFloat(sem.sgpa);
      if (!isNaN(sgpa)) {
        totalSGPA += sgpa;
        count += 1;
      }
    });
    const cgpa = totalSGPA / count;
    setCgpa(cgpa);
    convertToPercentage(cgpa);
  };

  const convertToPercentage = (cgpa) => {
    const percentage = cgpa * 9.5;
    setPercentage(percentage);
  };

  return (
    <div className="Calculator">
      <h1>SGPA & CGPA Calculator</h1>
      <div className="student-info">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleStudentChange}
        />
        <input
          type="text"
          name="usn"
          placeholder="USN"
          value={student.usn}
          onChange={handleStudentChange}
        />
      </div>
      {semesters.map((sem, index) => (
        <div key={index} className="semester-input">
          <input
            type="number"
            name="sgpa"
            placeholder="SGPA"
            value={sem.sgpa}
            onChange={event => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button onClick={handleAddSemester}>Add Semester</button>
      <button onClick={calculateCGPA}>Calculate CGPA</button>
      <h2>CGPA: {cgpa.toFixed(2)}</h2>
      <h2>Percentage: {percentage.toFixed(2)}%</h2>
      <div className="student-summary">
        <h3>Student Name: {student.name}</h3>
        <h3>USN: {student.usn}</h3>
      </div>
    </div>
  );
};

export default Calculator;
