import React from 'react'
import styled from 'styled-components'

const TitleData = [
   "sub",
   "dps",
]
const SubitleData = [
   "Electro",
]

const BackgroundData = [
   "Fischl",
   "Fischl",
   "Fischl",
   "Fischl",
]

const Saction = styled.div`
  color: #090909;
  backdrop-filter: blur(5.5px);
  border: 1px solid #923;
  border-radius: 10px;
  max-width: 360px;
  max-height: 900px;
  width: 100%;
  height: 95%;
  cursor: pointer;
 `
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  z-index: 5;
  &:hover{
   overflow: visible;
  }
`
const Imgage = styled.img`
  position: absolute;
  width: 650px;
  top: 0;
  bottom: 0;
  left: -145px;
  right: 0;
  margin: auto;
  opacity: .8;
  z-index: 3;
  &:hover{
   opacity: 1;
   z-index: 10;
   transform: scale(1.1);
   transition: .3s;
  }
`
const Background = styled.ul`
  position: relative;
  z-index: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 99%;
  justify-content: start;
  align-items: center;

`
const BackgroundItem = styled.li`
  list-style: none;
  color: transparent;
  font-size: 70px;
  font-weight: 900;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing:5px;
  -webkit-text-stroke: 1px #090909;
`
const Title = styled.div`
  position: absolute;
  bottom: 80px;
  left: 40px;
  display: flex;
  flex-direction:column;
  text-align: start;
`

const TitleItem = styled.p`
   font-size: 26px;
   font-weight: 900;
   text-transform: uppercase;
   padding: 0;
   margin: -5px;
`
const SubitleItem = styled.p`
   font-size: 20px;
   color: #833dcb;
   font-weight: 200;
   text-transform: uppercase;
   padding: 0;
   margin: -5px;
`

const FischlCard = () => {
   return (
      <Saction>
         <Container>
            <Imgage src='./img/YaeMiko/imgCard/Fischl.png' />
            <Background>
               {BackgroundData.map(item => (
                  <BackgroundItem key={item}>{item}</BackgroundItem>
               ))}
            </Background>
            <Title>
               {TitleData.map(item => (
                  <TitleItem key={item}>{item}</TitleItem>
               ))}
               {SubitleData.map(item => (
                  <SubitleItem key={item}>{item}</SubitleItem>
               ))}
            </Title>
         </Container>
      </Saction>
   )
}

export default FischlCard