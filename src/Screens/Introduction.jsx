import React from 'react'
import styled from 'styled-components'

import { Button } from '../Components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Title = styled.div`
  font-size: 2em;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 8px;
  color: #E57F9B;
  text-align: center;
`

const SubTitle = styled.div`
  margin: 20px 0px 20px 0;
  color: #E57F9B;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 8px;
  text-align: center;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Introduction = ({ moveOnPage }) => {
  return (
    <Container id="main">
      <Title>Két keréken négy kapun át</Title>
      <SubTitle>Germus Blanka</SubTitle>
      <ButtonContainer>
        <Button moveOnPage={() => moveOnPage('#map')} text={'Térkép'} type='Line' />
        <Button moveOnPage={() => moveOnPage('#essay')} text={'Szöveg'} type='Line' />
      </ButtonContainer>
    </Container>
  )
}
