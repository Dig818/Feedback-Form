// File: pages/Students.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = students.filter(s => s.id !== id);
    setStudents(updated);
    localStorage.setItem('students', JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Student Feedbacks</h2>
      {students.length === 0 ? <p>No feedback yet.</p> : (
        <ul className="space-y-4">
          {students.map(s => (
            <li key={s.id} className="bg-white p-4 rounded shadow">
              <p><strong>Name:</strong> {s.name}</p>
              <p><strong>Email:</strong> {s.email}</p>
              <p><strong>Course:</strong> {s.course}</p>
              <p><strong>Feedback:</strong> {s.feedback}</p>
              <div className="mt-2 space-x-2">
                <Link to={`/edit/${s.id}`} className="text-blue-600">Edit</Link>
                <button onClick={() => handleDelete(s.id)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}