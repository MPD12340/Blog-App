import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-header">
        <div className="logo">
          <h1>
            <Link to="/">OUR-BLOGS</Link>
          </h1>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="nav-link">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-link">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  height: 4.5rem;

.nav-header {
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
}
.nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 0 2rem;
}
`;
