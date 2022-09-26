import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import Shop from './Shop';
import ShopMenu from './ShopMenu';
export const LeftMenuData = [
  { texts: "Захиалга хийх", link: 'left', component: Shop, rght: [] },
  { texts: 'Захиалга хянах', link: 'data', component: ShopMenu, rght: [] }
]
const About = () => {

  const [cookies] = useCookies([])
  const [menuData, setMenuData] = useState([])
  const [leftData, setLeftData] = useState([])

  useEffect(() => {
    if (cookies.rght === 'gicrpasall') return setMenuData(LeftMenuData)
    let chldArr = []
    LeftMenuData.forEach(item => {
      if (item.rght?.some(el => cookies.rght.includes(el))) chldArr.push(item)
    })
    setMenuData(chldArr)
    console.log('chldArr', chldArr)
  }, [])
  console.log('menuData', menuData)

  console.log('cookies', cookies)
  return (
    <Abouts>
      <div className='advice'>Зөвлөгөө, Мэдээ мэдээлэл</div>
      <hr className='hr'></hr>
    </Abouts>
  )
}

export default About
const Abouts = styled.div`
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