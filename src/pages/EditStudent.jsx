// File: pages/EditStudent.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', email: '', course: '', feedback: '' });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    const found = stored.find(s => s.id === id);
    if (found) setStudent(found);
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    const updated = stored.map(s => s.id === id ? student : s);
    localStorage.setItem('students', JSON.stringify(updated));
    navigate('/students');
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl mb-4">Edit Feedback</h2>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        className="w-full p-2 border mb-3"
      />
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        className="w-full p-2 border mb-3"
      />
      <input
        type="text"
        name="course"
        value={student.course}
        onChange={handleChange}
        className="w-full p-2 border mb-3"
      />
      <textarea
        name="feedback"
        value={student.feedback}
        onChange={handleChange}
        className="w-full p-2 border mb-3"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Update</button>
    </form>
  );
}
