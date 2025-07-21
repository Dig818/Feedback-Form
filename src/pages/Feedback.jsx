// File: pages/Feedback.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
  const [student, setStudent] = useState({ name: '', email: '', course: '', feedback: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('students')) || [];
    const updated = [...existing, { ...student, id: Date.now().toString() }];
    localStorage.setItem('students', JSON.stringify(updated));
    navigate('/students');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl mb-4">Submit Feedback</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3"
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3"
      />
      <textarea
        name="feedback"
        placeholder="Your feedback"
        onChange={handleChange}
        required
        className="w-full p-2 border mb-3"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
    </form>
  );
}