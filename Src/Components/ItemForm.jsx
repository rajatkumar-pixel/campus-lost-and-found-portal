import React, { useState } from 'react';

function ItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'lost',
    contact: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.contact) {
      alert('Please fill all fields');
      return;
    }
    const newItem = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    onAddItem(newItem);
    setFormData({ title: '', description: '', type: 'lost', contact: '' });
  };

  return (
    <section className="form-section">
      <h2>Report a Lost or Found Item</h2>
      <form onSubmit={handleSubmit} className="item-form">
        <div className="form-group">
          <label>Type:</label>
          <select name="type" value={formData.type} onChange={handleInputChange}>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>
        <div className="form-group">
          <label>Title (What is it?):</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="e.g., Blue Backpack" />
        </div>
        <div className="form-group">
          <label>Description & Location:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Details about the item and where it was lost/found..." rows="3"></textarea>
        </div>
        <div className="form-group">
          <label>Contact Info (Email/Phone):</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="How can someone reach you?" />
        </div>
        <button type="submit" className="btn-submit">Submit Report</button>
      </form>
    </section>
  );
}

export default ItemForm;
