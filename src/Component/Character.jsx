import React from 'react'
import styled from 'styled-components'


const Saction = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background: url(./img/YaeMiko/YaeBg.png) no-repeat;
  background-position: center;
  background-size: cover;
`
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-left: 50px;
  text-transform:uppercase;
`
const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #e67ec0;
`
const Subtitle = styled.h2`
  font-size: 38px;
  font-weight: 100;
  margin: 0;
  color: #faaede;
`
const Names = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
`
const Name = styled.li`
  list-style:none;
  font-size: 56px;
  font-weight: 900;
  margin: 0;
  position: absolute;
  left: 25px;
  top: -35px;
`
const SecondName = styled.li`
  list-style:none;
  font-size: 56px;
  font-weight: 900;
  margin: 0;
  position: absolute;
  left: 88px;
  top: 10px;
`
const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`
const Text = styled.p`
  font-size: 180px;
  letter-spacing: .8px;
  text-transform:uppercase;
  font-weight: 900;
  font-style: italic;
  margin: 0;
  margin-right: 1rem;
  color: transparent;
  -webkit-text-stroke: 1px #faaede;
`
const Image = styled.img`
  width: 100%;
  position: absolute;
  top: -8%;
  left: 6%;
  bottom: 0%;
  right: 0%;
  margin:auto;
`
const Logo = styled.img`
  width: 130px;
  position: sticky;
  top: 16px;
  left: 20px;
  margin: 0;
  justify-self:start;
  align-self: start;
`

const Character = () => {
  return (
    <Saction>
      <Container>
        <Logo src='./img/YaeMiko/Logo.png' />
        <Left>
          <Title>new character</Title>
          <Subtitle>kitsune</Subtitle>
          <Names>
            <Name>yae</Name>
            <SecondName>miko</SecondName>
          </Names>
        </Left>
        <Right>
          <Text>yaemiko</Text>
          <Text>yaemiko</Text>
          <Text>yaemiko</Text>
          <Image src='./img/YaeMiko/YaeMiko.png' />
        </Right>
      </Container>
    </Saction>
  )
}

export default Character