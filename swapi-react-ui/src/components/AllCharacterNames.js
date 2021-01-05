import React, { useState, useEffect } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

import PropTypes from 'prop-types'

const AllCharacterNames = () => {
    const [characterArray, setCharacterArray] = useState([])
    const [fetchingCharacterData, setFetchingCharacterData] = useState(true)

    const URL = 'https://swapi.dev/api/people/';

    const fetchData = (apiUrl) => {
        fetch(apiUrl)
        .then(res=>res.json())
        .then(data => {
            apiUrl = data['next'];
            setCharacterArray(prevArray => prevArray.concat(data['results']))
            // Check next API url is empty or not, if not empty call the above function 
            if(apiUrl !== '' && apiUrl !== null && fetchingCharacterData && characterArray.length !== data['count']){
                fetchData(apiUrl);
            } else {
                setFetchingCharacterData(false)
            }
        })
    }   

    useEffect(()=>{ 
        fetchData(URL)
    });

    return(
        <>
            <Autocomplete 
                autoComplete
                options = {characterArray}
                name='characterDropdown'
                fullWidth={true}
                loading={fetchingCharacterData}
                getOptionLabel= {idx => idx.name}
                renderInput={(params) => <TextField {...params} variant="outlined"/>}
            />
        </>
    )
    
}

AllCharacterNames.propTypes = {
    characterArray: PropTypes.array,
    selectedCharacter: PropTypes.object
}

export default AllCharacterNames;