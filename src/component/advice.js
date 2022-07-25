import React from 'react';
import styled from 'styled-components';

const advice = () => {
  return ( 
    <Advice>
    <div className='advice'>Бүтээгдэхүүн</div>
    <hr className='hr'></hr>
    </Advice>
  )
}

export default advice

const Advice = styled.div`
        padding-left: 15%;  
        padding-right: 15%;
    .advice{
        font-weight: normal;
        font-size: 30px;
        margin-top: 20px;
    }
    .hr{
        background-color: #568FF4;
        
    }
`