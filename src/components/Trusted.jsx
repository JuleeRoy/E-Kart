import styled from "styled-components";
import { FaApple } from "react-icons/fa";
const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://cdn-icons-png.flaticon.com/512/152/152752.png"
              alt="trusted-brands"
            />
           
          </div>
          <div className="slide">
            <img
                src="https://i.pinimg.com/736x/19/53/bf/1953bf829d4fdffc090a89c31d0da64b.jpg"
                alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-canon-3-283269.png"
            alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
             src="https://cdn-icons-png.flaticon.com/512/882/882749.png"
             alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://cdn-icons-png.flaticon.com/512/588/588337.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width:50px;
    height:50px;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
