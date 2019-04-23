import React from 'react';
import styled from 'styled-components'

const Foot = styled.div`
  background: #9FA9BA;
  color: #f8f9f8;
  widht: 100%;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8em;
`

const Content = styled.div`
  display: inline-block;
  width: 25%;
  margin-left: 7%
`

const Subtitle = styled.div`
  letter-spacing: 5px;
  text-decoration: underline;
`

export const Footer = () => {
  return (
    <Foot id='footer'>
      <Content>
        <Subtitle>Szakdolgozat: </Subtitle>
        <p>Germus Blanka - BSc</p>
        <p>Eötvös Loránd Tudományegyetem - Földtudományi szak</p>
        <p>Térképész és Geoinformatikai szakirány</p>
      </Content>
      <Content>
        <Subtitle>Konzulens: </Subtitle>
        <p>Dr Irás Krisztina - Adjunktus</p>
        <p>Eötvös Loránd Tudományegyetem - Informatikai Kar</p>
        <p>Térképtudományi és Geoinformatikai Tanszék</p>
      </Content>
      <Content>
        <Subtitle>Weblap: </Subtitle>
        <p>Germus Kata Hedvig - Webfejlesztő</p>
        <p>RisingStack </p>
        <p style={{ color: '#9FA9BA' }}>.</p>
      </Content>
    </Foot>
  )
}
