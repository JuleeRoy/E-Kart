import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import SingleProduct from "./SingleProduct.jsx";
import Product from "./Products.jsx";
import Cart from "./Cart.js"
import ErrorPage from "./error/ErrorPage.jsx";
import { GlobalStyle} from "./GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoginPage from "./LoginPage.jsx";
import banner1 from "./images/banner1.jpg"
const App = () => {

   const theme={
    colors:{
      heading: "#E72744",
      text: "#29303E",
      white: "#fff",
      black: " #212529",
      helper: "#FD913C",
      bg:"#F6F8FA",
      footer_bg:"#0a1435",
      banner_bg:"#F6F8FA",
      btn:"#E72744",
      border:"#F05524",
      hr:"#ffffff",
      gradient:"linear-gradeint(deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px ,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:" rgba(0,0,0,0.16) 0px 1px 4px"
    },
    media:{
      mobile:"768px",
      tab:"998px"
    },
    banner:{
      banner_img:banner1
    }
  
   }
  return (
   <ThemeProvider theme={theme}>
    <Router>
     <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<LoginPage/>}/>
         <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  );
};

export default App;
