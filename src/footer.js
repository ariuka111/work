import React from 'react';
import { BsArrowRight } from "react-icons/bs"
import styled from 'styled-components';

const Footer = () =>{
    return(
     <FooterStyle>
          <h4>БҮХ БҮТЭЭГДЭХҮҮН ХАРАХ</h4> 
          <BsArrowRight className="my_icon" />
      </FooterStyle>
    )
}

export default Footer

const FooterStyle = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 80px;
  background-color: #3C80F7;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  h4{
    margin-bottom: 0px;
  }
  .my_icon{
    color: #ffffff;
    font-size: 35px;
  }
  &:hover{
    background-color: #5A93F5;
  }
  @media (max-width: 700px){
      h4{
        font-size: 15px;
      }
      .my_icon{
        color: #ffffff;
        font-size: 30px;
      }
  }
`