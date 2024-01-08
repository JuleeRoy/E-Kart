import styled from "styled-components";

const Contact = () => {
  
  return <Wrapper>
    <h1 className="common-heading">Contact Page</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6174463487123!2d85.13271997374318!3d25.61762531454666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed584500e52619%3A0x4e33d67f5b7e4e22!2sCity%20Centre%20Mall!5e0!3m2!1sen!2sin!4v1696078083655!5m2!1sen!2sin" width="100%" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>


    
    <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xoqopwdk"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="5"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
  </Wrapper>
    
  
};

const Wrapper = styled.section`
    padding: 3rem 0 0 0;
    text-align: center;

    .container {
      margin-top:2rem;

      .contact-form {
        max-width:35rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap:2rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            margin-top:0px;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


export default Contact;
