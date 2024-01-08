import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
// import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (

       <Wrapper>
           <div className="loginPage">
               <div className="btn-box">
                   
                   <Button>LOGIN</Button>
                
                 
                 <Button>SIGNUP</Button>
                 
               </div>

               <div className="login_Form">
                <form action="">
                   <input type="text"
                   placeholder='enter your name' />
                    <input type="email"
                   placeholder='enter your email' />
                    <input type="text"
                   placeholder='enter your Contact number' />
                    <Button id='signUp'>SIGNUP</Button>
                    
                </form>
               </div>
           </div>
       </Wrapper>

  )
};

const Wrapper=styled.section`

width:100%;
height:100vh;
padding:30px;

.loginPage{
    width:40%;
    margin: auto;
    border:1px solid gainsboro;
    height:80vh;
    padding:20px 10px;

    .btn-box{
        display:flex;
        justify-content:space-around;
    }

    .login_Form{
           
        padding:15px 5px;
        margin-top:7%;
        form{
        display:flex;
        flex-direction:column;
        align-items:center;

         input{
            width:100%;
            margin-bottom:20px;
         }

         #signUp{
            width:100%;
         }
         }
    }


}


`



export default LoginPage