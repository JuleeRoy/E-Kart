import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCart } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";
const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCart();
  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
  console.log(user)
  console.log("nav" + total_item);
  return (
    <NavBar>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link home-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
           
          </li>

        
              {isAuthenticated && <li><p className="user-login--name">{user.name}</p>
              </li>}
            
          <li>
          <NavLink
              // to="/login"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}>
              {isAuthenticated ? (
             <Button style={{padding:"5px 7px" , fontSize:"small"}}
             onClick={() =>
               logout({ logoutParams: { returnTo: window.location.origin } })
             }
           >
             Log Out
           </Button>
            ) : (
              <Button onClick={() => loginWithRedirect()}  style={{padding:"5px 7px" , fontSize:"small"}}>Log In</Button>
              
            )}
            </NavLink>
           
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link  cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavBar>
  );
};
const NavBar = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }

      
    }
  }
 

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.4rem;
    }

    .cart-total--item {
      width: 1.6rem;
      height: 1.6rem;
      position: absolute;
      background-color: red;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -10%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
      font-size: smaller;
    }
  }

  .user-login--name {
    text-transform: capitalize;
    color:#F13AB1;
    font-weight:bold;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4rem;
        margin-top: 10px;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }
    ${"" /** mobile sidebar code */}
    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 2s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 2s ease;

      .navbar-link {
        font-size: 2rem;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .navbar-lists {
      width: 50vw;
      transform: translateX(50%);
      left: 50%;

      .navbar-link {
        font-size: 3rem;
      }
    }
  }
`;

export default Nav;
