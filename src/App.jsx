import styled from 'styled-components';
import Character from './Component/Character'
import RecommendedTeam from './Component/RecommendedTeam'
import Navbar from './Component/Navbar';
import Skills from './Component/Skills'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:#090909;
  color: #fff;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`


function App() {

  return (
    <Container>
      <Navbar />
      <Character id='Character' />
      <RecommendedTeam />
      <Skills id='Skill' />
    </Container>
  );
}

export default App;


