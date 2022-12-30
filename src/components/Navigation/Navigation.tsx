import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  text-align: right;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  grid-gap: 24px;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLink to={`/`}>All Posts</StyledLink>
      <StyledLink to={`/all-authors`}>All Authors</StyledLink>
      <StyledLink to={`/create-post`}>Create Post</StyledLink>
    </StyledNavigation>
  );
};

export default Navigation;