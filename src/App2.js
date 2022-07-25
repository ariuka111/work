
import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from "axios"
import Header from './Header';
function App() {
  const [ userId, setUserId ] = useState(null)
  const [ username, setUsername ] = useState('')
  const [email, setEmail] = useState('')

  useEffect(()=>{
    const FetchData = async () =>{
       let response = await axios.post(`https://infosystems.mn/api/auth/local`, { identifier:'testuser123', password:'testuser',  })
      setUsername(response.data.user.username)
      setEmail(response.data.user.email)
      setUserId(response.data.user.id)
    }

    FetchData()

  }, [] )

  const ChangeUserName = ( event ) => {
    setUsername(event.target.value)
  }
  const ChangeEmail = (event)=>{
    setEmail(event.target.value)
  }
 const HandleSubmit = (e) =>{
    e.preventDefault()

    axios.put(`https://infosystems.mn/api/users/${userId}`,  { username: username , email:email } )
    .then(response=>{
      console.log(response)

    }).catch(err=>{
      console.log(err.response)
    })

}

  // console.log("id-", userId);

  return (
    <BodyStyle>
      <Header />

      <div className="content">
        <form onSubmit={HandleSubmit}>

            <h1 className='text11'>Хэрэглэгчийн бүртгэл</h1>

            <div className="box">
              <input className="input" value={username} onChange={event => ChangeUserName( event ) }  type="text" placeholder="Нэр..." />
              <input className="input" value={email} onChange={event => ChangeEmail( event ) } type="email" placeholder="Gmail" />
            </div>

            <button type="submit" >Мэдээлэл шинэчлэх</button>

        </form>
      </div>
    </BodyStyle>
  );

}

export default App;

const BodyStyle = styled.div`
 
  .content{
      width: 400px;
      margin: 10% auto;
      text-align: center;
      background:rgba(255,255,255,0.6);
      padding:20px 50px;
      box-sizing:border-box;
      box-shadow:0 3px 12px rgba(0,0,0,0.2);
      border-radius:2%;
      
    .text11{
      margin-bottom: 1.5em;
      font-size: 30px;
      color: #FF69B4;
      font-weight: 100;
    }
    .box {
        padding: 0.5rem 1rem;


        display: flex;
        flex-direction: column;
        gap: 15px;


        .input{
          padding: 5px 7px;
         
        }
    }
    button{
        display: inline-block;
        color: #fff;
        font-size: 0.8rem;
        border-radius: 1rem;
        padding: 1rem 3rem;
        background-image: linear-gradient(to right bottom, rgb(87, 164, 236), rgb(86, 67, 250));
        border: none;
        outline: none;
        cursor: pointer;
    }

  }
`