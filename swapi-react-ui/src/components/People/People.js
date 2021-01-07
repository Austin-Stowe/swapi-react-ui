import React, { useState } from 'react';
import { useQuery } from 'react-query';


const People = (props) => {
    const [page, setPage] = useState(1);
    const { data, status } = useQuery(['people' ,page], 
    () => fetch(`http://swapi.dev/api/people/?page=${page}`).then(res => res.json()), 
    {
        keepPreviousData: true
    })

    return (
        <>
            <h2>People</h2>

            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                    <button
                        onClick={() => setPage(old => Math.max(old - 1, 1))}
                        disabled={page === 1}>
                        Previous Page
                    </button>
                    <button onClick={() => console.log(data)}>PRINT</button>
                    <button
                        onClick={() => setPage(old => (!data.next ? old : old + 1))}
                        disabled={!data.next }>
                        Next page
                    </button>
                </>
            )}
        </>
    );
}

export default People;