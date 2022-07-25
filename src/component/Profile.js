import React, { useState  } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BiUser} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai'

const Profile = () => {
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false);
    const[errorPass, setErrorPass] = useState(false);
    const[number, setNumber] = useState(false)
    const[success, setSuccess] = useState(false)
    const[showPass, setShowPass] = useState(true)
    const [showConf, setShowConf] = useState(true)
    
    const ChangeUserName = ( event ) => {
        setUsername(event.target.value);
        setError(false)
        setErrorPass(false)
        setNumber(false)
        setSuccess(false)
      }
      const ChangeEmail = (event)=>{
        setEmail(event.target.value)
        setError(false)
        setErrorPass(false)
        setNumber(false)
        setSuccess(false)
      }
      const ChangePassword = ( event ) => {
        setPassword(event.target.value)
        setError(false)
        setErrorPass(false)
        setNumber(false)
        setSuccess(false)
      }
      const ChangeConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value)
        setError(false)
        setErrorPass(false)
        setNumber(false)
        setSuccess(false)
      }
      
      const HandleSubmit = (e) =>{
        e.preventDefault()
        let object = {username: username, email:email, password:password}
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
                setError(true);
        } else if(password !== confirmPassword ) {
                setErrorPass(true);
        } else if(password.length < 3){
                setNumber(true)
        } else {
              console.log(object)
        
              // axios.post(`https://infosystems.mn/api/users`, { ...object } ).then(response=>{
              //   console.log('response', response)
              //   setSuccess(true)
              // }).catch(error=>{
              //   console.log('error', error.response)
              // })
        }
        
    }

    const changeIcon = showPass === true ? false : true;
    const changeIconConf = showConf === true ? false :true;
 
    
    const successMessage = () =>{
      return(
        <div className='error' 
        style={{
          display: success ? '':'none'
        }}>
          <p>amjilttai</p>
        </div>
      )
    }
      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none'
            }}>
                <p>Хоосон байна !!!</p>
          </div>
        );
      };
      const errorNumber = () =>{
        return (
          <div className='error'
          style={{
            display: number? '' : 'none'
          }}>
            <p>Хамгийн багадаа 3 орон оруулна уу !!!</p>
          </div>
        )
      }
      const errorPassword = () => {
        return (
          <div
            className="error"
            style={{
              display: errorPass ? '' : 'none'
            }}>
            <p>Нууц үгээ адил хийнэ үү !!!</p>
          </div>
        );
      };
  return (
    <Profiles>
    <div className='content'>
        <form onSubmit={HandleSubmit}>
            <h4>Шинэ хэрэглэгч бүртгэх</h4>
            <div className="box" > 
                <div className='box2' ><BiUser className='ner'/> <input value={username}  onChange={event => ChangeUserName (event)} className="input" type="text" placeholder="Нэр..." /></div>
                <div className='box2'> <HiOutlineMail className='ner'/> <input value={email} onChange={event => ChangeEmail (event)}  className="input" type="email" placeholder="Э-майл" /></div>
                <div className='box2'><RiLockPasswordLine className='ner'/> <input value={password} onChange={event => ChangePassword (event)} id="input"  className="input" type={showPass ? "text" : "password"}   placeholder="Нууц үг"  /> <span  onClick={() => {
                  setShowPass(changeIcon);
                }} > 
                {changeIcon ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                </span>
               
                </div>
                <div className='box2'> <RiLockPasswordLine className='ner'/><input value={confirmPassword} onChange={event => ChangeConfirmPassword (event)}  className="input" type={showConf ? "text" : "password"} placeholder="Нууц үг давтах" />  <span  onClick={() => {
                  setShowConf(changeIconConf);
                }} > 
                {changeIconConf ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                </span>
                  </div> 
            </div>
            <div className="messages">
              {successMessage()}
              {errorNumber()}
              {errorMessage()}
              {errorPassword()}
      </div>
            <button type="submit" >Хадгалах</button>
        </form>
    </div>
    </Profiles>
  )
}
export default Profile
const Profiles = styled.div`
background-color: #F7F7F7;
margin: 0;
padding: 0;
height: 100vh;
.content{
      width: 400px;
      text-align: center;
      background: white;	
      padding:20px 50px;
      box-sizing:border-box;
      box-shadow:0 3px 12px rgba(0,0,0,0.2);
      border-radius:2%;

    .box {
        padding: 0.5rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .box2{
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 2px solid #D1D1D4;
            transition: 0.5s;
            .eye{
              font-size: 20px;
            }
        }
        .box2:hover{
          border-bottom-color: black;
        }
        .ner{
            font-size: 25px;
        }
        .input{
          padding: 5px 7px;
          height: 35px;
          border: none;
        }
            .input:active,
            .input:focus,
            .input:hover {
              outline: none;
            }
    }
    button{
        margin: 15px 0 15px 0;
        display: inline-block;
        color: #fff;
        font-size: 15px;
        border-radius: 4px;
        padding: 8px 20px;
        background-color: #3C80F7;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover{
          background-color: #5A93F5;
        }
    }
    
  }
  .error{
    font-size: 15px;
    text-align: left;
    padding-left: 40px;
    color: red;
  }
`