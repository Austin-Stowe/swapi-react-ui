import React, { useState, useEffect } from 'react'

import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

import PropTypes from 'prop-types'

const AllCharacterNames = () => {

    const URL = 'https://swapi.dev/api/people/';
    let initialArr = [];
    const [characterArray, setCharacterArray] = useState([])
    const [fetchingCharacterData, setFetchingCharacterData] = useState(true)
    const fetchData = (apiUrl) => {
        fetch(apiUrl)
        .then(res=>res.json())
        .then(data => {
            apiUrl = data['next'];
            console.log(data['count'])
            initialArr = [...initialArr, data['results']]
            // Check next API url is empty or not, if not empty call the above function 
            if(apiUrl !== '' && apiUrl !== null){
                fetchData(apiUrl);
            } else {
                setFetchingCharacterData(false)
            }
        })
        const mergedArr = [].concat(...initialArr)
        setCharacterArray(mergedArr)
    }   

    useEffect(()=>{ 
        fetchData(URL)
    },[]);

    const printArray = ()=>{console.log(characterArray)}

    return(
        <>
            <Autocomplete 
                autoComplete
                options = {characterArray}
                name='characterDropdown'
                fullWidth={true}
                loading={fetchingCharacterData}
                loadingText='Loading characters...'
                getOptionLabel= {idx => idx.name}
                style={{backgroundColor:'#FFE81F', fontWeight:'bold'}}
                renderInput={(params) => <TextField {...params} variant="outlined" style={{fontWeight:'bold'}}/>}
            />
            <button onClick={printArray}>Print</button>
        </>
    )
    
}

AllCharacterNames.propTypes = {
    characterArray: PropTypes.array,
    selectedCharacter: PropTypes.object
}

export default AllCharacterNames;