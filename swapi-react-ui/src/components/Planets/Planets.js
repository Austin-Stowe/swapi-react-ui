import React from 'react'

import { useQuery } from 'react-query'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CircularProgress from '@material-ui/core/CircularProgress'

import Planet from './Planet'


const Planets = ({ pageNum }) => {

    const { data, status } = useQuery(['planets' ,pageNum], 
    () => 
        fetch(`http://swapi.dev/api/planets/?page=${pageNum}`).then(res => res.json()), 
    {
        keepPreviousData: true
    })

    return (
        <>
            {status === 'loading' && (
                <Container style={{margin:'auto'}}>
                    <CircularProgress size={350}/>
                </Container>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                    <Container style={{marginTop:10}}>
                        <Row>
                            <Col>
                                {data.results.map(
                                    idx => <Planet key={Math.random()} planet={idx}/>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
}

export default Planets;