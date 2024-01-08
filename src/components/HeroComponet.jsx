import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import hero3 from "../images/hero3.jpg";
import  home from "../images/home-banner.jpg"
const HeroComponent = ({myData}) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            {name==="E-Cart" ? <p className="intro-data" style={{color:"white"
          }}>Welcome To </p>:<p className="intro-data"  style={{color:"#F13AB1"}}>u should know</p>}
            <h1> {name}  </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/product">
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src={hero3}
                alt="home_page_banner"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  background-image: url(${home});
  // transform:rotate(180deg);
  // background-size: cover;
  

  
  .container{
    // background-color:#ffffff;
    // padding:3rem;
    // opacity:0.6;
  }
 
  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
 
  
    p {
      margin: 2rem 0;
      color:#000000;
      font-weight:bold;
      
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
     
    }
   
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  }
  figure {
    position: relative;
    z-index:11;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    &::after {
      content: "";
      width:70%;
      height:100%;
      background-color:#efefef;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
     
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroComponent;