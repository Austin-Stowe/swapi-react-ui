import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Person = ({ person }) => {
    const phsyicalCharacteristics = {
        [person.height]: '[cm]',
        [person.mass]: '[kg]',
        [person.hair_color]: 'hair',
        [person.skin_color]: 'skin',
        [person.eye_color]: 'eyes',
        [person.gender]: ''
    }

    const birthYear = person.birth_year;

    return(
        <>
        <Jumbotron>
            <h1>{person.name}</h1>
            <h2><em>Born during the year {birthYear}</em></h2>
            <Container>
                <Row>
                    <Col>
                        <h5>Physical Characteristics</h5>
                    </Col>
                </Row>
                {
                    Object.keys(phsyicalCharacteristics)
                    .map((key) => 
                        <Row key={key}>
                            <Col>
                            {key.toString().charAt(0).toUpperCase() + key.toString().slice(1)}
                            {' ' +phsyicalCharacteristics[key]}
                            </Col>
                        </Row>
                        )
                }
            </Container>
        </Jumbotron>
        </>
    )
}

export default Person