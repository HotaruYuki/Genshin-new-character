import React from 'react'
import styled from 'styled-components'
import FischlCard from './CharacterCards/FischlCard'
import NahidaCard from './CharacterCards/NahidaCard'
import SucroseCard from './CharacterCards/SucroseCard'
import YaeCard from './CharacterCards/YaeCard'

const Saction = styled.div`
  height: 100vh;
  background-color: #fff;
  color: #090909;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ContainerCard = styled.div`
  width: 1400px;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;`

const Title = styled.h1`
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
`


const RecommendedTeam = () => {
  return (
    <Saction>
      <Container>
        <Title>
          Recommended Team.
        </Title>
        <ContainerCard>
          <YaeCard />
          <FischlCard />
          <NahidaCard />
          <SucroseCard />
        </ContainerCard>
      </Container>
    </Saction>
  )
}

export default RecommendedTeam