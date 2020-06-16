import React from 'react';
import styled from 'styled-components'

const Foot = styled.div`
  background: #9FA9BA;
  color: #f8f9f8;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
    width: 90%;
    padding: 5px 0 5px 0;
`

const Subtitle = styled.div`
  font-size: 1.3em;
`

const Description = styled.p`
  font-size: 0.9em;
  margin-bottom: 10px;
`

export const Footer = () => {
    return (
        <Foot id='footer'>
            <Container>
                <Subtitle>Szakdolgozat: Germus Blanka - BSc</Subtitle>
                <Description>Eötvös Loránd Tudományegyetem - Földtudományi szak - Térképész és Geoinformatikai
                    szakirány</Description>
                <Subtitle>Konzulens: Dr Irás Krisztina - Adjunktus</Subtitle>
                <Description>Eötvös Loránd Tudományegyetem - Informatikai Kar - Térképtudományi és Geoinformatikai
                    Tanszék</Description>
                <Subtitle>Weblap: Germus Kata Hedvig - Webfejlesztő</Subtitle>
            </Container>
        </Foot>
    )
}
