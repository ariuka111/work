import React, {useState} from 'react';
import styled from 'styled-components';

const data = [
    { title: "MACS санхүүгийн бүртгэлийн иж бүрэн программ", content: '“MACS” санхүүгийн програм: Сангийн Яамны нягтлан бодох бүртгэлийн газраас 2жил тутамд шинэчлэн олгодог тусгай зөвшөөрлийг 1998 оноос хойш авсаар ирсэн бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган, мэдээллийн технологийн сүүлийн үеийн ололт амжилтыг ашиглан байнгын сайжруулалт хийгдэж, шинэчлэгдэн боловсронгуй болсоор байна. “MACS” програмыг санхүүгийн бүртгэлийн үйл ажиллагаандаа нэвтрүүлснээр цаг хугацаа, мөнгөө хэмнэхээс гадна удирдлагын шийдвэр гаргахад шаадлагатай мэдээллүүдээр шуурхай хангагдаж, танай байгууллагын өрсөлдөх чадвар, ашигт ажиллагааны түвшин нэмэгдэх боломжтой. ', image:'pic.jpg', iconUrl:'one.png', smTitle:'MACS' },
    { title: "PACS төслийн санхүүгийн программ", content:'“PACS” санхүүгийн програмын анхны хувилбарыг 2006 онд боловсруулж гаргасан бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган, мэдээллийн технологийн сүүлийн үеийн ололт амжилтыг ашиглан байнгын сайжруулалт хийгдэж шинэчлэгдэн өөрчлөгдсөөр байна.', image:'pic1.jpg', iconUrl:'two.png', smTitle:'PACS' },
    { title: "Хүний нөөцийн удирдлага төлөвлөлтийн цогц систем", content:'Байгууллагын боловсон хүчний дэлгэрэнгүй бүртгэл хөтлөх, хэрэгцээт тайлан мэдээллээ хүссэн үзүүлэлтээр, тайлагнах, бүлэглэх, ажилтнуудын талаарх хайлт хийх, судалгаа гаргах, мэдээлэл цуглуулах, боловсруулалт хийх зэргээр хүний нөөцийн мэргэжилтний хувьд өдөр тутмын үйл ажиллагаагаа автоматжуулан, удирдлагад стратеги төлөвлөлтийн зөв шийдвэр гаргахад туслах зорилготой.', image:'pic2.png', iconUrl:'three.png', smTitle:'MACS HUMAN CAPITAL' },
    { title: "Авто засварын бүртгэл, удирдлагын систем", content:'Энэ модуль нь Macs болон Car service системээс бэлэн ба захиалах сэлбэг хайлт хийж тухайн барааны үлдэгдэл, загвар, зураг зэрэг бүх мэдээллийг харуулна. Мөн стандартын дагуу орлуулж болох хувилбарт сэлбэгийн жагсаалтыг хамт гаргаж ирнэ. Сэлбэг эд ангийн эрэлт хэрэгцээний судалгаа гаргадаг.', image:'pic3.jpg', iconUrl:'four.png', smTitle:'  CARSERVICE' },
    { title: "Эмийн санд зориулсан POS систем", content:'Энэ систем нь эмийн сангуудад зориулагдсан бөгөөд таны цаг завыг хөнгөвчлөх, жор баригчтай тооцоо хийх, орлого зардлаа хянах, эрүүл мэндийн хөнгөлөлт тооцох, серийн нарийн бүртгэл хөтлөн бараа материалын дэлгэрэнгүй тайлан гарах боломжтой.', image:'pic4.jpg', iconUrl:'five.png', smTitle:'POS' },
    { title: "Бүтээгдэхүүний өртөг тооцооллын систем", content:'“COST” Бэлэн бүтээгдэхүүний өртөг тооцох програмыг нийтийн хоолны газар болон ресторан мөн түүнчлэн үйлдвэрлэл эрхэлдэг бөгөөд бүтээгдэхүүний өртөг тооцох шаардлагатай аж ахуй нэгж байгууллагууд ашиглах боломжтой юм. Програмын зориулалт нь бүтээгдэхүүнд орж байгаа бүх материалын хэмжээ орцыг бүртгэж тухайн бэлэн бүтээгдэхүүний нийт өртгийг гаргахад оршино.', image:'pic5.jpg', iconUrl:'six.png', smTitle:'COST' }, 

]

const Advice = () => {
  const [ selectedData, setSelectedData ] = useState({ ...data[0], index: 0})

  return ( 
    <Advices>
    <div className='body'><h2>{selectedData.title}</h2>
    <hr className='hr'></hr>
    <div className='BigFlex'>
    <div className='advice'>
            <div className='title' ><span> Бүтээгдэхүүн </span></div>
            {data.map((element, index)=> {
              return(
                <div key={index} onClick={()=>setSelectedData({ ...element, index: index})} className={`adv ${selectedData.index === index ? `advActive` : ``} `}>
                  <img src={`/images/${element.iconUrl}`} alt='one'/>
                  <span>{element.smTitle}</span>
                </div>
              )
            })}
    </div>
   <div className='product'>
         <img className='imgs' src={`/images/${selectedData.image}`} alt='pic'/>
         {selectedData.content}
    </div> 
    </div>
    </div>
    </Advices>
  )
}

export default Advice

const Advices = styled.div`
        padding-left: 15%;  
        padding-right: 15%;
    .body{
        padding-top: 20px;
      .hr{
          background-color: #568FF4;
        }
        
    .BigFlex{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 50px;
      .advice{
      display: flex;
      flex-direction: column;
      gap: 10px;
        .title{
          font-size: 25px;
          padding-top: 30px;
        }
        .adv{
            cursor: pointer;
            display: flex;
            align-items: center;
            background-color: white;
            padding: 5px 10px 5px 10px;
            transition: transform .2s;
            font-size: 15px ;
            border-left: 3px solid #D1D1D4;
            box-shadow: 0 3px 5px -5px #333;
            img{
              height: 50px;
            }
            span{
              padding-left: 20px;
              white-space: nowrap;
            }
        }
        .advActive{
            border-left-color: #568FF4;
        }
        .adv:hover{
          -ms-transform: scale(0.5); /* IE 9 */
          -webkit-transform: scale(0.5); /* Safari 3-8 */
          transform: scale(1.05); 
          }
        }    
    }
        .product{
          padding-top: 30px;
          text-align: justify;
          .imgs{
            float: right;
            height: 40%;
            padding-left: 40px;
          }
        }
    }
    @media (max-width:700px){
      padding-left: 30px;
      padding-right: 30px;
      .body{
        h2{
          font-size: 15px;
        }
        .BigFlex{
          flex-direction: column;
        .advice{
          padding-right: 100px;
          .adv{
            img{
              height: 30px;
            }
          }
          .title{
            font-size: 17px;
           }
         }
        }
        .product{
          font-size: 13px;
          .imgs{
            height: 200px;
            display: none;
          }
        }
      }
    }
`