import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 5rem auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
 flex-direction: column;
 form {
    display: flex;
    flex-direction: column;
    align-items: center;
 }
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}`);
        setTitle(response.data.data.title);
        setContent(response.data.data.content);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/blogs/${id}`, { title, content });
      setTitle("")
      setContent("")
      console.log('Blog updated successfully');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <FormContainer>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          Title:
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Label>
        <Label>
          Content:
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></TextArea>
        </Label>
        <Button type="submit">Update</Button>
      </form>
    </FormContainer>
  );
};

export default EditBlog;
