import React from 'react'
import styled from 'styled-components'
import NormalAtak from './SkillCard/NormalAtak'

const Saction = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  scroll-snap-align: center;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #090909;
`
const Left = styled.div`
  width: 49%;
  height: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #923;
  flex: 3;
`
const Background = styled.img``
const Backgroun = styled.img``

const Right = styled.div`
  width: 49%;
  height: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #923;
  flex: 2;
  position: relative;
  overflow: hidden;
`
const BackgroundItem = styled.img`
  position: absolute;
  width: 228%;
  left: -250px;
  right: 0;
  bottom: 0;
  top: 0;
`
const BackgroundFilter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  backdrop-filter: grayscale(50%);
  background: rgba(25, 25, 25, 0.8);
  z-index: 2;
`

const Skills = () => {
   return (
      <Saction>
         <Container>
            <Left>
               <NormalAtak />
            </Left>
            <Right>
               <BackgroundFilter />
               <BackgroundItem src='./img/YaeMiko/YaeMikoBg.jpg' />
            </Right>
         </Container>
      </Saction>
   )
}

export default Skills