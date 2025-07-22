// File: components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdFeedback, MdDashboard, MdSchool } from 'react-icons/md';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/" className="flex items-center gap-2">
            <MdOutlineHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="flex items-center gap-2">
            <MdFeedback />
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="flex items-center gap-2">
            <MdDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/students" className="flex items-center gap-2">
            <MdSchool />
            Students
          </Link>
        </li>
      </ul>
    </nav>
  );
}
