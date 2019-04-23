import React, { Component } from 'react'
import styled from 'styled-components'

import { Main } from '../Components/Main'
import { Map } from '../Components/Map'
import { Essey } from '../Components/Essey'
import { Button } from '../Components/Button'
import { Footer } from '../Components/Footer'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

export default class Dashboard extends Component {

  moveOnPage = (id) => document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  });

  render() {
    return (
      <Container>
        <Main moveOnPage={this.moveOnPage} />
        <Container>
          <Map />
          <Essey moveOnPage={this.moveOnPage} />
          <Footer />
          <Button moveOnPage={() => this.moveOnPage('#main')} className="fas fa-arrow-up" backgroundColor='#E4BE7D' />
        </Container>
      </Container>
    )
  }
}

