// File: pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(stored);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="bg-white shadow rounded p-4 mb-6">
        <p className="text-lg">📊 Total Feedback Entries: <strong>{students.length}</strong></p>
      </div>
      {students.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Recent Feedbacks</h3>
          <ul className="space-y-4">
            {students.slice(-3).reverse().map((s) => (
              <li key={s.id} className="bg-white p-4 rounded shadow">
                <p><strong>Name:</strong> {s.name}</p>
                <p><strong>Email:</strong> {s.email}</p>
                <p><strong>Course:</strong> {s.course}</p>
                <p><strong>Feedback:</strong> {s.feedback}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
