import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home </NavLink>
      <p>/  {title}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height:5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  padding-left: 2rem;

  a {
    font-size:1.5rem;
   
    
    
  }
  p{
    
    padding:0px 10px;
  }
`;

export default PageNavigation;