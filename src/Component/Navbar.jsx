import React from 'react'
import styled from 'styled-components'


const data = [
   "Character",
   "Skill",
   "Teams",
];

const Saction = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  backdrop-filter: blur(2rem);
  /* background: #923; */
`
const List = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin: 10px;
  padding: 0;
`
const ListItem = styled.li`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
  color: #faaede;
`




const Navbar = () => {
   return (
      <Saction>
         <Container>
            <List>
               {data.map(item => (
                  <ListItem key={item}>{item}</ListItem>
               ))}
            </List>
         </Container>
      </Saction>
   )
}

export default Navbar