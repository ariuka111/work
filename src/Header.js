import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = () =>{
    return(
     <BodyStyle>
        <div className='header'>
            <div><img className='logo' src='images/logo.png' alt='logo'></img></div>
            <div className='Home'>
                <Link to="/">
                    <span>Нүүр</span>
                </Link>
                <Link to="/advice">
                    <span>Бүтээгдэхүүн</span>
                </Link>
                <Link to="/about">
                    <span>Зөвлөгөө</span>  
                </Link> 
                <span>Бидний тухай</span>
                <span>Холбоо барих</span>
                <span>Заавар</span>
            </div>
            <div className='Help'>
                <span>Тусламж</span>
                <Link to="/profile">
                    <span>Нэвтрэх</span>
                </Link>
            </div>
            
        </div>
        </BodyStyle>
    )
}

export default Header

const BodyStyle = styled.div`
 .header{
    padding-left: 15%;
    padding-right: 15%;
    height: 60px;
    width: 100%;
    overflow: hidden;
    background-color: #4F4B4C;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between; 
    font-size: 15px;
    font-weight: bold;
    list-style-type: none;
    align-items: center;
    color: #BCBBBB;
    .logo{
        cursor: pointer;
        height: 40px;
    }
    a{
        color: #BCBBBB;
        text-decoration: none;
    }
    span{
        cursor: pointer;
        padding: 20px;
        &:hover{
            opacity: 0.8;
        }
    }
}
@media (max-width:700px){
    .header{
        padding-left: 5%;
        padding-right: 5%;
        .logo{
            cursor: pointer;
            height: 30px;
        }
        .Home{
            display: none;
        }
        .Help{
            display: none;
        }
    }
}
`