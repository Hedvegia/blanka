import React from 'react'
import styled from 'styled-components'

import { Button } from './Button'

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
  height: 2.5em;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 8px;
  color: #E57F9B;
`

const SubTitle = styled.div`
  height: 4em;
  color: #E57F9B;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 8px;
`

export const Main = ({ moveOnPage }) => {
  return (
    <Container id="main">
      <Title>Két keréken négy kapun át</Title>
      <SubTitle>Germus Blanka</SubTitle>
      <div>
        <Button moveOnPage={() => moveOnPage('#map')} text={'Térkép'} type='Line' />
        <Button moveOnPage={() => moveOnPage('#essey')} text={'Szöveg'} type='Line' />
      </div>
    </Container>
  )
}
