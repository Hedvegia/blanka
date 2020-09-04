import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    width: 100%;
`

export class CV extends React.Component {
    render() {
        return (<Container
                id="cv"
                className="Observe"
            >
                <h2>Önéletrajz</h2>
            </Container>
        )
    }
}
