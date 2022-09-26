import React, { useState } from 'react'
import Footer from '../footer';
import styled from 'styled-components';

const data = [
  { title: 'MACS санхүүгийн программ', content: 'Сангийн Яамны нягтлан бодох бүртгэлийн газраас 2жил тутамд шинэчлэн олгодог тусгай зөвшөөрлийг 1998 оноос хойш авсаар ирсэн бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган...', image: 'pic.jpg', iconUrl: 'one.png', smTitle: 'MACS' },
  { title: 'PACS төслийн санхүүгийн программ', content: '“PACS” санхүүгийн програмын анхны хувилбарыг 2006 онд боловсруулж гаргасан бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган, мэдээллийн технологийн сүүлийн үеийн ололт амжилтыг ашиглан байнгын сайжруулалт хийгдэж шинэчлэгдэн өөрчлөгдсөөр байна.', image: 'pic1.jpg', iconUrl: 'two.png', smTitle: 'PACS' },
  { title: 'Хүний нөөцийн удирдлага төлөвлөлтийн систем', content: 'Байгууллагын боловсон хүчний дэлгэрэнгүй бүртгэл хөтлөх, хэрэгцээт тайлан мэдээллээ хүссэн үзүүлэлтээр, тайлагнах, бүлэглэх, ажилтнуудын талаарх хайлт хийх, судалгаа гаргах, мэдээлэл цуглуулах, боловсруулалт хийх зэргээр хүний нөөцийн мэргэжилтний хувьд өдөр тутмын үйл ажиллагаагаа автоматжуулан, удирдлагад стратеги төлөвлөлтийн зөв шийдвэр гаргахад туслах зорилготой.', image: 'pic2.png', iconUrl: 'three.png', smTitle: 'MACS HUMAN CAPITAL' },
  { title: 'Авто засварын бүртгэл, удирдлагын систем', content: 'Энэ модуль нь Macs болон Car service системээс бэлэн ба захиалах сэлбэг хайлт хийж тухайн барааны үлдэгдэл, загвар, зураг зэрэг бүх мэдээллийг харуулна. Мөн стандартын дагуу орлуулж болох хувилбарт сэлбэгийн жагсаалтыг хамт гаргаж ирнэ. Сэлбэг эд ангийн эрэлт хэрэгцээний судалгаа гаргадаг.', image: 'pic3.jpg', iconUrl: 'four.png', smTitle: 'CARSERVICE' },
  { title: 'Эмийн санд зориулсан POS систем', content: 'Энэ систем нь эмийн сангуудад зориулагдсан бөгөөд таны цаг завыг хөнгөвчлөх, жор баригчтай тооцоо хийх, орлого зардлаа хянах, эрүүл мэндийн хөнгөлөлт тооцох, серийн нарийн бүртгэл хөтлөн бараа материалын дэлгэрэнгүй тайлан гарах боломжтой.', image: 'pic4.jpg', iconUrl: 'five.png', smTitle: 'POS' },
  { title: 'Бүтээгдэхүүний өртөг тооцооллын систем', content: '“COST” Бэлэн бүтээгдэхүүний өртөг тооцох програмыг нийтийн хоолны газар болон ресторан мөн түүнчлэн үйлдвэрлэл эрхэлдэг бөгөөд бүтээгдэхүүний өртөг тооцох шаардлагатай аж ахуй нэгж байгууллагууд ашиглах боломжтой юм. Програмын зориулалт нь бүтээгдэхүүнд орж байгаа бүх материалын хэмжээ орцыг бүртгэж тухайн бэлэн бүтээгдэхүүний нийт өртгийг гаргахад оршино.', image: 'pic5.jpg', iconUrl: 'six.png', smTitle: 'COST' },
]

const Home = () => {
  const [switchCont, setSwitchCont] = useState({ ...data[0], index: 0 })
  return (
    <BodyStyle>
      <div className='Body'>
        <p>Бүтээгдэхүүн</p>
        <div className='size'>
          <div className='images'>

            {data.map((element, index) => {
              return (
                <div key={index} onClick={() => setSwitchCont({ ...element, index: index })}
                  className={`flex ${switchCont.index === index ? `flexActive` : ``}`}
                >
                  <img className='imgs' src={`/images/${element.iconUrl}`} alt='one' />
                  <span>{element.smTitle}</span>
                </div>
              )
            })}

          </div>

          <div className='word'>
            <div className='macs'>
              <h3>{switchCont.title}</h3>
              {switchCont.content}
              <button className='button'>Дэлгэрэнгүй</button></div>
            <img src={`/images/${switchCont.image}`} alt='pic' />
          </div>
        </div>
        <Footer />
      </div>
    </BodyStyle>
  )
}

export default Home


const BodyStyle = styled.div`
.Body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
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
    gap: 30px;
    .flex{
      cursor: pointer;
      padding-right: 20px;
      display: flex;
      align-items: center;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      background-color: white;
      transition: 0.2s ease all;
      width: 100%;
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
            width: 250px;
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