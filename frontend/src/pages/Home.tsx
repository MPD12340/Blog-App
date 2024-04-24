import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <Wrapper>
        <h1>Welcome to my Blog Website</h1>
        <p>
          This professional blog website provides a user-friendly platform for
          creating and sharing engaging content. With a focus on enhancing the
          blogging experience, users can explore various tools and features to
          craft their perfect posts. Whether you're a seasoned blogger or just
          starting out, this platform is designed to help you create better
          blogs and connect with your audience in meaningful ways.
        </p>
        <div className="blog-btn">
          <Link to='/blogs' className="link-button">See all blogs</Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomePage;

const Wrapper = styled.div`
display: ;
justify-content: center;
flex-direction: column;
text-align: justify;
gap: 1rem 0;
h1 {
  margin-bottom: 1rem;
  text-align: center;
}

`;

