import React from 'react'
import styled from 'styled-components';
const about = () => {
  return (
    <About>
    <div className='advice'>Зөвлөгөө, Мэдээ мэдээлэл</div>
    <hr className='hr'></hr>
    </About>
  )
}

export default about
const About = styled.div`
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