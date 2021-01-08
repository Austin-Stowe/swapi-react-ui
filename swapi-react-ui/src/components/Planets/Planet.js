import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Planet = ({ planet }) => {
    const planetCharacteristics = {
        [planet.rotation_period]: 'rot. period',
        [planet.orbital_period]: 'orb. period',
        [planet.diameter]: '[km]',
        [planet.climate]: '',
        [planet.gravity]: '',
        [planet.terrain]: '',
        [planet.surface_water]:'',
        [planet.population]: ''
    }

    return(
        <>
        <Jumbotron>
            <Container>
            <h1>{planet.name}</h1>
            <Col>
            {
                Object.keys(planetCharacteristics)
                .map((key) => 
                    <Row key={Math.random()}>
                        <Col key={Math.random()}>
                        {key.toString().charAt(0).toUpperCase() + key.toString().slice(1)}
                        {' ' +planetCharacteristics[key]}
                        </Col>
                    </Row>
                    )
            }
            </Col>
            </Container>
        </Jumbotron>
        </>
    )
}

export default Planet