import React from 'react';

function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🎓 Campus Lost & Found</h1>
        <p className="subtitle">Centralized portal for our university students</p>
      </div>
      <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? '✖ Cancel Report' : '➕ Report Item'}
      </button>
    </header>
  );
}

export default Header;
