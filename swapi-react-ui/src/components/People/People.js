import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

import Person from './Person'


const People = (props) => {
    const [page, setPage] = useState(1);
    const { data, status } = useQuery(['people' ,page], 
    () => fetch(`http://swapi.dev/api/people/?page=${page}`).then(res => res.json()), 
    {
        keepPreviousData: true
    })

    return (
        <>
            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                <Navbar bg='warning' variant='dark' sticky='top'>
                    <Button
                        onClick={() => setPage(old => {
                            window.scrollTo({top:0, behavior:'smooth'})
                            return Math.max(old -1 , 1)
                        })}
                        disabled={page === 1}
                        variant='warning'
                        style={{margin:'auto'}}
                    >
                        Previous Page
                    </Button>
                    <h5 style={{margin:'auto'}}>People - Page {page}</h5>
                    <Button
                        onClick={() => setPage(old => {
                            window.scrollTo({top:0, behavior:'smooth'})
                            if(!data.next){
                                return old
                            } return old + 1
                        })}
                        disabled={!data.next }
                        variant='warning'
                        style={{margin: 'auto'}}
                    >
                        Next page
                    </Button>
                </Navbar>
                    <Container style={{marginTop:10}}>
                        <Row>
                            <Col>
                                {data.results.map(
                                    idx => <Person person={idx}/>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
}

export default People;