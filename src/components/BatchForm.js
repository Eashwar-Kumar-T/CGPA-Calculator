import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjectsData } from './GradesForm';

const departments = [
  { value: 'AIDS', name: 'Artificial Intelligence and Data Science' },
  { value: 'AIML', name: 'Artificial Intelligence and Machine Learning' },
  { value: 'BME', name: 'Bio Medical Engineering' },
  { value: 'CIV', name: 'Civil Engineering' },
  { value: 'CS', name: 'Computer Science and Engineering (Cyber Security)' },
  { value: 'CSE', name: 'Computer Science and Engineering' },
  { value: 'CSBS', name: 'Computer Science and Business Systems' },
  { value: 'ECE', name: 'Electronics and Communication Engineering' },
  { value: 'EEE', name: 'Electrical and Electronics Engineering' },
  { value: 'IT', name: 'Information Technology' },
  { value: 'MCT', name: 'Mechatronics Engineering' },
  { value: 'MECH', name: 'Mechanical Engineering' },
  { value: 'VLSI', name: 'VLSI Design' }
];

const semesters = [
  { value: '1', name: 'Semester 1' },
  { value: '2', name: 'Semester 2' },
  { value: '3', name: 'Semester 3' },
  { value: '4', name: 'Semester 4' },
  { value: '5', name: 'Semester 5' },
  { value: '6', name: 'Semester 6' },
  { value: '7', name: 'Semester 7' },
  { value: '8', name: 'Semester 8' }
];

const BatchForm = () => {
  const [batch, setBatch] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const key = `[${batch}, ${department}, ${semester}]`;
    if (!subjectsData[key]) {
      alert('No subjects found for the selected combination');
      return;
    }

    localStorage.setItem('batchDetails', JSON.stringify({ batch, department, semester }));
    navigate('/grades');
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'batch':
        setBatch(e.target.value);
        break;
      case 'department':
        setDepartment(e.target.value);
        break;
      case 'semester':
        setSemester(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="main-content">
        <h2 className="card-title text-center mb-4">Enter Batch Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="batch" className="form-label">Batch</label>
              <input
                type="text"
                id="batch"
                className="form-control"
                placeholder="e.g., 2020-2024"
                required
                value={batch}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="semester" className="form-label">Semester</label>
              <select
                id="semester"
                className="form-control"
                required
                value={semester}
                onChange={handleChange}
              >
                <option value="">Select Semester</option>
                {semesters.map(sem => (
                  <option key={sem.value} value={sem.value}>{sem.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <select
              id="department"
              className="form-control"
              required
              value={department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.value} value={dept.value}>{dept.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default BatchForm;
