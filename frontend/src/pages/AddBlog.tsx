import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddBlog.css';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/blogs/', { title, content });
      setShowPopup(true);
      setTitle('');
      setContent('');
      navigate('/')
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="add-blog-container">
      <h2>Add Blog</h2>
      <form className="add-blog-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit" className="link-button">Submit</button>
      </form>
      {showPopup && (
        <div className="popup">
          <p>Blog created successfully!</p>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
