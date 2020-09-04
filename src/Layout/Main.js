import React, {Component} from 'react'
import styled from 'styled-components'

import {Introduction} from '../Screens/Introduction'
import {CV} from '../Screens/CV'
import {Map} from '../Screens/Map'
import {Essay} from '../Screens/Essay'
import {Button} from '../Components/Button'
import {Footer} from '../Components/Footer'

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export default class Main extends Component {

    moveOnPage = (id) => document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    })

    render() {
        return (
            <Container>
                <Introduction moveOnPage={this.moveOnPage}/>
                <Container>
                    <CV/>
                    <Map/>
                    <Essay moveOnPage={this.moveOnPage}/>
                    <Footer/>
                    <Button moveOnPage={() => this.moveOnPage('#main')} className="fas fa-arrow-up"
                            backgroundColor='#E4BE7D'/>
                </Container>
            </Container>
        )
    }
}

