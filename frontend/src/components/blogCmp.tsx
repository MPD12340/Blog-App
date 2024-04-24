import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Blog } from '../types/types';

const CardContainer = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-bottom: 8px;
`;

const Content = styled.p``;

const BlogCmp = ({ id, title, content, blogs, setBlogs }: any) => {
  const handleDelete = (e:any) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
     .then((response) => response.json())
     .then((data) => {
        setBlogs(blogs.filter((blog: Blog) => blog.id!== id));
      })
     .catch((error) => console.error(error));
  }
  return (
    <CardContainer>
      <Link to={`singleblog/${id}`}>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Link>
      <div className='edit-n-delete'>
        <Link to={`/blogs/edit/${id}`} className='delete-edit-btn'>Edit</Link>
        <button onClick={handleDelete} className='delete-edit-btn'>Delete</button>
      </div>
    </CardContainer>
  );
};

export default BlogCmp;
