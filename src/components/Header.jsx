import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            {/* <img src="./images/logo123.jpg" alt=" mylogo" className='logo'/> */}
             <h2 id='logo-text'>🅴-🅲🅰🆁🆃</h2>
             </NavLink>
             <Nav/>
    </MainHeader>
  )
};

const MainHeader=styled.header`
padding:0 4rem;
height:5.5rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;


#logo-text{
    font-size:2.8rem;
    color:#F13AB1;
    
    
}
`

export default Header