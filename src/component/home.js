import React, { useState } from 'react'
import Footer from '../footer';
import styled from 'styled-components';

const Home = () => {
    const [ switchCont, setSwitchCont ] = useState(1)

    const onClickFunction = ( value ) =>{
        setSwitchCont(value)
    }

  return (
    <BodyStyle>
      <div className='Body'>
       <p>Бүтээгдэхүүн</p>
        <div className='size'>
          <div className='images'>
            <div onClick={()=>onClickFunction(1)} className={`flex ${switchCont === 1 ? `flexActive`: ``}`}><img className='imgs' src='/images/one.png' alt='icon'/><span>MACS</span></div>
             <div onClick={()=>onClickFunction(2)} className={`flex ${switchCont === 2 ? `flexActive`: ``}`} ><img className='imgs' src='/images/two.png' alt='icon'/><span>PACS</span></div>
             <div onClick={()=>onClickFunction(3)} className={`flex ${switchCont === 3 ? `flexActive` : ``}`}><img className='imgs' src='/images/three.png' alt='icon'/><span className='text'>MACS HUMAN CAPITAL</span></div>
             <div onClick={()=>onClickFunction(4)} className={`flex ${switchCont === 4 ? `flexActive` : ``}`}><img className='imgs' src='/images/four.png' alt='icon'/><span>CARSERVICE</span></div>
            <div onClick={()=>onClickFunction(5)} className={`flex ${switchCont === 5 ? `flexActive` : ``}`}><img className='imgs' src='/images/five.png' alt='icon'/><span>POS</span></div>
            <div onClick={()=>onClickFunction(6)} className={`flex ${switchCont === 6 ? `flexActive` : ``}`}><img className='imgs' src='/images/six.png' alt='icon' /><span>COST</span></div>
          </div>

            { switchCont === 1 ? <div className='word'>
                <div className='macs'><h3>MACS санхүүгийн программ</h3>
                    <div>Сангийн Яамны нягтлан бодох бүртгэлийн газраас 2жил тутамд шинэчлэн олгодог тусгай зөвшөөрлийг 1998 оноос хойш авсаар ирсэн бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган...</div>
                        <div><button className='button'>Дэлгэрэнгүй</button></div>
                </div>
                <div><img  src='/images/pic.jpg'/></div>
            </div> 
            : <div className='word'>
                <div className='macs'><h3>PACS төслийн санхүүгийн программ</h3>
                    <div>“PACS” санхүүгийн програмын анхны хувилбарыг 2006 онд боловсруулж гаргасан бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган, мэдээллийн технологийн сүүлийн үеийн ололт амжилтыг ашиглан байнгын сайжруулалт хийгдэж шинэчлэгдэн өөрчлөгдсөөр байна.</div>
                        <div><button className='button'>Дэлгэрэнгүй</button></div>
                </div>
                <div><img  src='/images/pic1.jpg'/></div>
          </div>}

          </div>
      </div>
      <Footer/>
    </BodyStyle>
  )
}

export default Home


const BodyStyle = styled.div`
.Body{
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: #F7F7F7;
  p{
    padding: 20px 0 20px 0;
    font-weight: normal;
    text-align: center;
    font-size: 40px;
  }
  .size{
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-left: 15%;
    padding-right: 15%;
      h3{
          font-weight: normal;
        }
        
  .images{
    display: flex;
    justify-content: space-between;
    .flex{
      cursor: pointer;
      padding-right: 20px;
      display: flex;
      align-items: center;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      background-color: white;
      transition: 0.2s ease all;
    }
    .flexActive{
        box-shadow: 1px 1px 20px -10px;
        transform: scale(1.057);
    }
    .imgs{
    height: 65px;
    padding: 10px;
    }
    span{
      font-size: 14px;
      font-weight: bold;
      padding-left: 15px;
    }
  }
  .word{
    display: flex;
    flex-direction: row;
    gap: 100px;
    align-items: center;
      .macs{
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: left;
        font-size: 20px;
        .button{
            background-color: #3C80F7;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            font-size: 20px;
            transition: 0.3s;
            display: inline-block;
            text-decoration: none;
            cursor: pointer;
         }
          .button:hover {
              background-color: #5A93F5;
          }
      }
    img{
      height: 350px;
      width: 600px;
    }
  }
}
}
 
  @media (max-width:700px) {
    .Body{
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      background-color: #F7F7F7;
        p{
          padding: 10px 0 10px 0;
          font-weight: normal;
          text-align: center;
          font-size: 25px;
        }
      .size{
          padding-left: 5%;
          padding-right: 5%;
          .images{
                flex-direction: column;
                gap: 8px;
            }
            .word{
              gap: 50px;
              .macs{
                  display: flex;
                  flex-direction: column;
                  gap: 15px;
                  align-items: left;
                  font-size: 17px;
                  .button{
                    font-size: 15px;
                  }
            }
            img{
              display: none;
            }
          }
        }
    }
  }
`