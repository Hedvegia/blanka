import React from 'react';
import styled from 'styled-components'

const Foot = styled.div`
  background: #9FA9BA;
  color: #f8f9f8;
  widht: 100%;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9em;
`

const Content = styled.div`
  column-count: 3;
  width: 93%;
  margin-left: 7%
`

const Subtitle = styled.div`
  font-size: 1.3em;
`

export const Footer = () => {
  return (
    <Foot id='footer'>
      <Content>
        <Subtitle>Szakdolgozat: </Subtitle>
        <p>Germus Blanka - BSc</p>
        <p>Eötvös Loránd Tudományegyetem - Földtudományi szak</p>
        <p>Térképész és Geoinformatikai szakirány</p>
        <Subtitle>Konzulens: </Subtitle>
        <p>Dr Irás Krisztina - Adjunktus</p>
        <p>Eötvös Loránd Tudományegyetem - Informatikai Kar</p>
        <p>Térképtudományi és Geoinformatikai Tanszék</p>
        <Subtitle>Weblap: </Subtitle>
        <p>Germus Kata Hedvig - Webfejlesztő</p>
      </Content>
    </Foot>
  )
}
