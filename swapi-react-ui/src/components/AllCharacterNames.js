import React, { useState, useEffect } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

import PropTypes from 'prop-types'

const AllCharacterNames = () => {

    const PEOPLE_URL = 'https://swapi.dev/api/people/';
    const [fetchingCharacterData, setFetchingCharacterData] = useState(true)
    const [characterArray, setCharacterArray] = useState(async ()=>{
        let initialArr = [];
        async function fetchPeopleData(URL){
            fetch(URL)
            .then(res => res.json())
            .then(data => {
                initialArr = initialArr.concat(data['results'])
                URL = data['next']
                if(URL !== '' && URL !== null){
                    fetchPeopleData(URL)
                } else {
                    setFetchingCharacterData(false)
                }
            })
            .then(data=>{
                if(!fetchingCharacterData && initialArr.length === data['count']){
                    console.log('should be here')
                }
            })
        }
        
        fetchPeopleData(PEOPLE_URL)
        console.log(initialArr)
    })

    useEffect(()=>{console.log(characterArray)}, [fetchingCharacterData])
    const printArray = ()=>{console.log(characterArray)}

    return(
        <>
            <Autocomplete 
                autoComplete
                options = {characterArray}
                name='characterDropdown'
                fullWidth={true}
                loading={fetchingCharacterData}
                disabled={fetchingCharacterData}
                loadingText='Loading characters...'
                getOptionLabel= {idx => idx.name}
                style={{backgroundColor:'#FFE81F', fontWeight:'bold'}}
                renderInput={(params) => <TextField {...params} variant="outlined" style={{fontWeight:'bold'}}/>}
            />
            <div>{fetchingCharacterData ? 'FETCHING': 'DONE'}</div>
            <button onClick={printArray}>Print</button>
        </>
    )
    
}

AllCharacterNames.propTypes = {
    characterArray: PropTypes.array,
    selectedCharacter: PropTypes.object
}

export default AllCharacterNames;